# Runbook server — akasha-redesign

Setup lengkap untuk menjalankan situs di **satu server Ubuntu 24.04 · RAM 4 GB · disk 60 GB (`/` 30 GB + `/home` 30 GB)**, sekaligus menyiapkan database dan object storage yang akan dipakai fase backend. Semua perintah dijalankan sebagai user dengan `sudo`, kecuali disebut lain.

Berkas yang dirujuk runbook ini ada di folder `deploy/` repo. Repo di-clone ke server di §2.9, jadi semua perintah `cp` sesudahnya memakai path `/home/akasha/repo/deploy/…`:

| Berkas | Dipasang ke |
|---|---|
| `systemd/akasha-web.service` | `/etc/systemd/system/akasha-web.service` |
| `systemd/seaweedfs.service` | `/etc/systemd/system/seaweedfs.service` |
| `caddy/Caddyfile` · `caddy/caddy.env.example` | `/etc/caddy/Caddyfile` · `/etc/caddy/caddy.env` |
| `postgresql/akasha.conf` | `/etc/postgresql/17/main/conf.d/akasha.conf` |
| `pgbackrest/pgbackrest.conf` | `/etc/pgbackrest.conf` |
| `cron/akasha-backup` | `/etc/cron.d/akasha-backup` |
| `seaweedfs/s3.json.example` | `/etc/seaweedfs/s3.json` |
| `env/web.env.example` | `/etc/akasha/web.env` |
| `sudoers/akasha-deploy` | `/etc/sudoers.d/akasha-deploy` |
| `scripts/deploy.sh` | dijalankan dari checkout repo (`bash …/deploy.sh`) |

---

## 0. Gambaran

### Apa yang berjalan

| Komponen | Versi | Fungsi | Dipakai sejak |
|---|---|---|---|
| **Caddy** | 2.x (repo resmi) | Reverse proxy, HTTPS otomatis, melayani `/media` & `/documents` langsung dari disk | Sekarang |
| **Node.js** | 24 LTS | Menjalankan situs (Next.js mode standalone) | Sekarang |
| **PostgreSQL** | 17 (repo PGDG) | Database CMS | Fase backend — dipasang sekarang, masih kosong |
| **pgBackRest** | dari PGDG | Backup + point-in-time recovery PostgreSQL | Sekarang (sejak database ada) |
| **SeaweedFS** | rilis terbaru | Object storage kompatibel S3 untuk gambar & dokumen | Fase backend — dipasang sekarang, masih kosong |

Semuanya **open source**, dijalankan **langsung oleh systemd — tanpa Docker**. Alasannya spesifik untuk server ini: RAM 4 GB tidak menyisakan ruang untuk overhead kontainer, dan situs ini membawa ±2 GB aset di `public/` — dibungkus image Docker, setiap rebuild akan menulis ulang gigabyte itu ke partisi `/` yang hanya 30 GB.

### Peta port — hanya 80/443 yang terbuka ke internet

| Port | Layanan | Bind |
|---|---|---|
| 22 | SSH | publik (batasi ke IP kantor/VPN kalau bisa) |
| 80, 443 | Caddy | publik |
| 3000 | Situs (Next.js) | `127.0.0.1` |
| 3100 | Uji rilis baru saat deploy (sementara) | `127.0.0.1` |
| 5432 | PostgreSQL | `127.0.0.1` |
| 8333 | SeaweedFS S3 | `127.0.0.1` |
| 9333 · 8080 · 8888 (+10000 gRPC) | SeaweedFS master · volume · filer | `127.0.0.1` |

### Peta disk

```
/      (30 GB)  OS, paket, swapfile 4 GB, log (dibatasi 500 MB)
/home  (30 GB)  semua data yang tumbuh:
  /home/akasha/
  ├── repo/                    checkout git dangkal — tempat build (±4,5 GB: aset 2,1 GB + .git)
  ├── releases/<id>/           rilis standalone, 3 terakhir (±150 MB per rilis)
  ├── current -> releases/<id> rilis yang live
  └── shared/next-cache/       cache gambar teroptimasi, bertahan antar-rilis
  /home/data/
  ├── postgresql/              di-bind-mount ke /var/lib/postgresql
  ├── seaweedfs/               data object storage
  └── backups/pgbackrest/      repo backup lokal (repo1)
```

Perkiraan pemakaian `/home` saat go-live: **±10 GB dari 30 GB**. Setelah aset dipindah ke SeaweedFS di fase backend, checkout repo menyusut ke ratusan MB.

### Anggaran memori (4 GB)

| Komponen | Tipikal | Batas |
|---|---|---|
| OS, sshd, journald, Caddy | ±350 MB | — |
| Situs (Next.js) | 300–700 MB | `MemoryHigh=1200M`, `MemoryMax=1600M` |
| PostgreSQL | ±150 MB kosong, hingga ±700 MB | `shared_buffers=512MB` |
| SeaweedFS | 100–200 MB | `MemoryMax=512M` |
| **Build saat deploy** | **1,5–2 GB, sementara** | swap 4 GB menampung puncaknya |

Cukup untuk situs saat ini. **Untuk fase backend, rencanakan naik ke 8 GB**: panel admin CMS dan build-nya menambah beban yang tidak lagi muat dengan nyaman di 4 GB.

---

## 1. Yang perlu disiapkan sebelum mulai

- [ ] **Perubahan standarisasi aset sudah di-push ke `main`.** Server men-deploy apa yang ada di GitHub, bukan salinan lokal.
- [ ] **Domain** untuk server ini (mis. `www.akashainternational.com` atau subdomain staging dulu), dan akses ke pengelola DNS-nya.
- [ ] **IP publik** server, dengan port **80 dan 443 bisa dijangkau dari internet** — dibutuhkan Let's Encrypt untuk menerbitkan sertifikat. Kalau server di balik NAT kantor, minta IT meneruskan kedua port itu.
- [ ] **SSH key** untuk login admin.
- [ ] **Akses baca ke repo GitHub.** Kalau repo privat: buat *deploy key* (§2.9).
- [ ] **Lokasi backup di luar server ini** — mesin lain, NAS, atau bucket S3 di tempat lain. Backup yang hanya ada di disk yang sama bukan backup.
- [ ] **Email** untuk notifikasi Let's Encrypt.

---

## 2. Dasar OS

### 2.1 Pembaruan & paket dasar

```bash
sudo apt update && sudo apt full-upgrade -y
sudo apt install -y curl git ca-certificates gnupg ufw unattended-upgrades rsync jq
sudo timedatectl set-timezone Asia/Jakarta
```

### 2.2 User aplikasi

```bash
sudo adduser --disabled-password --gecos "" akasha
sudo chmod 750 /home/akasha
```

`/home/akasha` tetap `750`: hanya pemilik dan grup `akasha` yang bisa masuk. Caddy ditambahkan ke grup ini di §7 agar bisa membaca aset.

### 2.3 SSH — hanya kunci, tanpa root

Pastikan login dengan SSH key sudah berhasil **sebelum** langkah ini, lalu buat `/etc/ssh/sshd_config.d/10-hardening.conf`:

```
PermitRootLogin no
PasswordAuthentication no
KbdInteractiveAuthentication no
```

```bash
sudo sshd -t && sudo systemctl reload ssh
```

### 2.4 Firewall

```bash
sudo ufw default deny incoming
sudo ufw default allow outgoing
sudo ufw allow OpenSSH          # lebih baik: sudo ufw allow from <IP-kantor> to any port 22
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp
sudo ufw allow 443/udp          # HTTP/3
sudo ufw enable
```

### 2.5 Pembaruan keamanan otomatis

```bash
sudo dpkg-reconfigure -plow unattended-upgrades    # pilih "Yes"
```

### 2.6 Swap 4 GB

Menampung puncak memori saat build, supaya build tidak memicu OOM yang mematikan layanan lain.

```bash
sudo fallocate -l 4G /swapfile
sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
echo 'vm.swappiness=10' | sudo tee /etc/sysctl.d/99-swappiness.conf
sudo sysctl --system
```

### 2.7 Batasi ukuran log

```bash
sudo mkdir -p /etc/systemd/journald.conf.d
printf '[Journal]\nSystemMaxUse=500M\n' | sudo tee /etc/systemd/journald.conf.d/size.conf
sudo systemctl restart systemd-journald
```

### 2.8 Folder data di `/home` + bind mount PostgreSQL

**Lakukan sebelum memasang PostgreSQL**, supaya database langsung terbentuk di partisi `/home` sementara path standarnya (`/var/lib/postgresql`) tetap berlaku — semua tool PostgreSQL bekerja tanpa konfigurasi tambahan.

```bash
sudo mkdir -p /home/data/postgresql /home/data/seaweedfs /home/data/backups/pgbackrest
sudo mkdir -p /var/lib/postgresql
echo '/home/data/postgresql /var/lib/postgresql none bind 0 0' | sudo tee -a /etc/fstab
sudo systemctl daemon-reload
sudo mount /var/lib/postgresql
findmnt /var/lib/postgresql      # harus menunjukkan sumber /home/data/postgresql
```

### 2.9 Ambil repo (berkas konfigurasi + kode)

**Repo publik** — cukup clone lewat HTTPS (lompati bagian deploy key).

**Repo privat** — buat deploy key khusus server (hanya baca):

```bash
sudo -iu akasha ssh-keygen -t ed25519 -N "" -f /home/akasha/.ssh/github_deploy -C "akasha-server"
sudo -iu akasha cat /home/akasha/.ssh/github_deploy.pub
```

Tempel kunci publik itu di GitHub → repo → *Settings → Deploy keys → Add deploy key* (**tanpa** centang *Allow write access*). Lalu:

```bash
sudo -iu akasha tee /home/akasha/.ssh/config >/dev/null <<'EOF'
Host github.com
  IdentityFile ~/.ssh/github_deploy
  IdentitiesOnly yes
EOF
sudo -iu akasha ssh -T git@github.com     # jawab "yes"; harus muncul "successfully authenticated"
```

Clone **dangkal** — histori git repo ini lebih dari 2 GB dan server tidak membutuhkannya:

```bash
# repo privat:
sudo -iu akasha git clone --depth 1 --branch main git@github.com:IlyasaAliadjrun/akasha-redesign.git /home/akasha/repo
# repo publik:
# sudo -iu akasha git clone --depth 1 --branch main https://github.com/IlyasaAliadjrun/akasha-redesign.git /home/akasha/repo
```

---

## 3. Node.js 24 LTS

```bash
curl -fsSL https://deb.nodesource.com/setup_24.x -o /tmp/nodesource_setup.sh
sudo bash /tmp/nodesource_setup.sh
sudo apt install -y nodejs
node -v      # v24.x
```

Repo mengunci versi ini lewat `.nvmrc` dan `engines` di `package.json`.

---

## 4. PostgreSQL 17

### 4.1 Pasang

```bash
sudo apt install -y postgresql-common
sudo /usr/share/postgresql-common/pgdg/apt.postgresql.org.sh -y
sudo apt install -y postgresql-17 pgbackrest
sudo -u postgres psql -c 'SHOW data_directory;'   # /var/lib/postgresql/17/main (fisiknya di /home)
```

### 4.2 Tuning untuk 4 GB

**WAL archiving ditunda** sampai pgBackRest siap di §5 — kalau aktif lebih dulu, WAL menumpuk di disk.

```bash
sudo cp /home/akasha/repo/deploy/postgresql/akasha.conf /etc/postgresql/17/main/conf.d/akasha.conf
sudo sed -i 's/^archive_mode = on/archive_mode = off/' /etc/postgresql/17/main/conf.d/akasha.conf
sudo systemctl restart postgresql
```

### 4.3 Database & role untuk CMS

```bash
sudo -u postgres psql <<'SQL'
CREATE ROLE akasha_app LOGIN PASSWORD 'GANTI_DENGAN_PASSWORD_ACAK';
CREATE DATABASE akasha_cms OWNER akasha_app ENCODING 'UTF8' TEMPLATE template0;
REVOKE ALL ON DATABASE akasha_cms FROM PUBLIC;
SQL
```

Buat password dengan `openssl rand -base64 24`, simpan di password manager tim. Belum ada yang memakai database ini — fase backend yang akan mengisinya lewat `DATABASE_URL` (§8.1).

---

## 5. Backup PostgreSQL — pgBackRest

```bash
sudo cp /home/akasha/repo/deploy/pgbackrest/pgbackrest.conf /etc/pgbackrest.conf
sudo chown -R postgres:postgres /home/data/backups/pgbackrest
sudo chmod 750 /home/data/backups/pgbackrest
sudo -u postgres pgbackrest --stanza=akasha stanza-create
```

Sekarang aktifkan WAL archiving:

```bash
sudo sed -i 's/^archive_mode = off/archive_mode = on/' /etc/postgresql/17/main/conf.d/akasha.conf
sudo systemctl restart postgresql
sudo -u postgres pgbackrest --stanza=akasha check          # harus sukses
sudo -u postgres pgbackrest --stanza=akasha --type=full backup
sudo cp /home/akasha/repo/deploy/cron/akasha-backup /etc/cron.d/akasha-backup
sudo chmod 644 /etc/cron.d/akasha-backup
sudo -u postgres pgbackrest info
```

Jadwal: **full tiap Minggu 01.30, differential Senin–Sabtu 01.30**, ditambah WAL archiving terus-menerus — database bisa dipulihkan ke titik waktu mana pun di antara keduanya.

> ⚠️ **Wajib sebelum go-live: aktifkan `repo2` di lokasi lain.** `repo1` ada di disk yang sama dengan databasenya. Isi salah satu blok `repo2-*` di `/etc/pgbackrest.conf` (SFTP ke server lain, atau bucket S3 di luar server ini), lalu jalankan ulang `stanza-create` dan satu `full backup`.

**Uji restore minimal sekali sebelum go-live** — backup yang belum pernah dipulihkan belum terbukti:

```bash
sudo -u postgres mkdir -p /tmp/restore-test
sudo -u postgres pgbackrest --stanza=akasha --pg1-path=/tmp/restore-test restore
sudo -u postgres ls /tmp/restore-test          # harus berisi PG_VERSION, base/, dst.
sudo rm -rf /tmp/restore-test
```

---

## 6. SeaweedFS (object storage S3)

Dipasang sekarang agar fase backend tinggal memakainya. Sampai aset dipindahkan, layanan ini berjalan kosong (±100 MB RAM).

### 6.1 Pasang binary

Ambil rilis terbaru untuk `linux_amd64` dari https://github.com/seaweedfs/seaweedfs/releases (server ARM: `linux_arm64`).

```bash
VER=GANTI_DENGAN_VERSI_TERBARU      # mis. yang tertera di halaman releases
curl -fsSL -o /tmp/weed.tar.gz "https://github.com/seaweedfs/seaweedfs/releases/download/${VER}/linux_amd64.tar.gz"
sudo tar -xzf /tmp/weed.tar.gz -C /usr/local/bin weed
weed version

sudo useradd --system --home /home/data/seaweedfs --shell /usr/sbin/nologin seaweedfs
sudo chown -R seaweedfs:seaweedfs /home/data/seaweedfs
```

### 6.2 Kredensial S3

```bash
sudo mkdir -p /etc/seaweedfs
sudo cp /home/akasha/repo/deploy/seaweedfs/s3.json.example /etc/seaweedfs/s3.json
openssl rand -hex 16    # → accessKey
openssl rand -hex 32    # → secretKey
sudo nano /etc/seaweedfs/s3.json        # isi kedua nilai CHANGE_ME
sudo chown root:seaweedfs /etc/seaweedfs/s3.json
sudo chmod 640 /etc/seaweedfs/s3.json
```

Identitas `anonymous` memberi **akses baca** ke kedua bucket. Itu baru bisa dijangkau dari internet setelah blok domain aset di Caddyfile diaktifkan pada fase backend; sebelum itu semua port SeaweedFS hanya di `127.0.0.1`.

### 6.3 Jalankan & buat bucket

```bash
sudo cp /home/akasha/repo/deploy/systemd/seaweedfs.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable --now seaweedfs
sudo systemctl status seaweedfs --no-pager

echo -e "s3.bucket.create -name akasha-media\ns3.bucket.create -name akasha-documents\ns3.bucket.list" \
  | weed shell -master=127.0.0.1:9333
```

---

## 7. Caddy

```bash
sudo apt install -y debian-keyring debian-archive-keyring apt-transport-https
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/gpg.key' \
  | sudo gpg --dearmor -o /usr/share/keyrings/caddy-stable-archive-keyring.gpg
curl -1sLf 'https://dl.cloudsmith.io/public/caddy/stable/debian.deb.txt' \
  | sudo tee /etc/apt/sources.list.d/caddy-stable.list
sudo apt update && sudo apt install -y caddy

# Caddy membaca /media dan /documents langsung dari /home/akasha/repo/public
sudo usermod -aG akasha caddy
```

Konfigurasi & domain:

```bash
sudo cp /home/akasha/repo/deploy/caddy/Caddyfile /etc/caddy/Caddyfile
sudo cp /home/akasha/repo/deploy/caddy/caddy.env.example /etc/caddy/caddy.env
sudo nano /etc/caddy/caddy.env                    # isi SITE_DOMAIN dan ACME_EMAIL
sudo mkdir -p /etc/systemd/system/caddy.service.d /var/log/caddy
printf '[Service]\nEnvironmentFile=/etc/caddy/caddy.env\n' \
  | sudo tee /etc/systemd/system/caddy.service.d/env.conf
sudo chown caddy:caddy /var/log/caddy
sudo systemctl daemon-reload
```

Caddy **belum** dijalankan ulang di sini — situsnya belum ada. Itu dilakukan di §9 setelah deploy pertama dan DNS siap.

---

## 8. Deploy aplikasi — pertama kali

### 8.1 Variabel lingkungan

```bash
sudo mkdir -p /etc/akasha
sudo cp /home/akasha/repo/deploy/env/web.env.example /etc/akasha/web.env
sudo chown root:akasha /etc/akasha/web.env
sudo chmod 640 /etc/akasha/web.env
```

Isinya sudah benar untuk situs saat ini. Baris fase backend (`DATABASE_URL`, `S3_*`, …) sengaja masih dikomentari — situs belum membacanya. Nilai aslinya (password §4.3, kunci §6.2) dimasukkan ke sini saat fase backend, **tidak pernah ke git**.

### 8.2 Layanan & izin restart

File sudoers yang rusak bisa mengunci `sudo` untuk semua orang, jadi **validasi dulu, baru pasang**:

```bash
sudo visudo -cf /home/akasha/repo/deploy/sudoers/akasha-deploy      # harus "parsed OK"
sudo install -m 440 -o root -g root /home/akasha/repo/deploy/sudoers/akasha-deploy /etc/sudoers.d/akasha-deploy

sudo cp /home/akasha/repo/deploy/systemd/akasha-web.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable akasha-web
```

### 8.3 Deploy pertama

```bash
sudo -iu akasha bash /home/akasha/repo/deploy/scripts/deploy.sh
```

Script melakukan, berurutan: ambil `main` terbaru → `npm ci` → `npm run verify:assets` → build → rakit rilis di `releases/<id>` → **jalankan rilis baru di port 3100 dan pastikan `/en` menjawab 200** → alihkan `current` → restart layanan → cek lagi di port 3000. Build pertama memakan beberapa menit; swap akan terpakai, itu normal.

```bash
curl -I http://127.0.0.1:3000/en        # HTTP/1.1 200
curl -I http://127.0.0.1:3000/          # 307 ke /en atau /id
```

---

## 9. DNS, HTTPS & go-live

1. Buat **A record** `SITE_DOMAIN` → IP publik server (dan AAAA kalau punya IPv6). Turunkan TTL ke 300 beberapa hari sebelumnya kalau domain itu sedang dipakai situs lama.
2. Tunggu DNS menyebar: `dig +short <SITE_DOMAIN>` harus mengembalikan IP server.
3. Jalankan Caddy:
   ```bash
   sudo caddy validate --config /etc/caddy/Caddyfile --envfile /etc/caddy/caddy.env
   sudo systemctl restart caddy
   sudo journalctl -u caddy -n 50 --no-pager        # cari "certificate obtained successfully"
   ```
4. Verifikasi dari luar server:
   ```bash
   curl -I https://<SITE_DOMAIN>/                              # 307 → /en atau /id
   curl -I https://<SITE_DOMAIN>/en                            # 200
   curl -I https://<SITE_DOMAIN>/documents/annual-report/2025.pdf   # 200, application/pdf
   curl -I https://<SITE_DOMAIN>/media/shared/logo-white.png        # 200, image/png
   ```

Vercel tetap boleh hidup sebagai cadangan sampai situs di server ini terbukti stabil.

---

## 10. Operasional

| Kebutuhan | Perintah |
|---|---|
| Deploy versi terbaru `main` | `sudo -iu akasha bash /home/akasha/repo/deploy/scripts/deploy.sh` |
| Kembali ke rilis sebelumnya | `sudo -iu akasha bash /home/akasha/repo/deploy/scripts/deploy.sh rollback` |
| Rilis mana yang live | `sudo -iu akasha bash /home/akasha/repo/deploy/scripts/deploy.sh status` |
| Log situs | `sudo journalctl -u akasha-web -f` |
| Log akses web | `sudo tail -f /var/log/caddy/access.log` |
| Status semua layanan | `systemctl status akasha-web caddy postgresql seaweedfs --no-pager` |
| Status backup | `sudo -u postgres pgbackrest info` |
| Sisa disk | `df -h / /home` |
| Pemakaian memori | `free -h` · `systemctl status akasha-web` (baris *Memory*) |

**Pemantauan uptime dari luar.** Pasang pemeriksa di **mesin lain** — mis. Uptime Kuma (open source) di server monitoring IT — yang memanggil `https://<SITE_DOMAIN>/en` tiap menit dan mengirim alert. Pemantau yang berjalan di server ini sendiri ikut mati saat server mati.

**Kalau deploy gagal:** situs lama tetap live. Deploy tidak pernah mengalihkan ke rilis yang gagal uji di port 3100, dan otomatis rollback kalau rilis baru tidak menjawab setelah dialihkan. Pesan error menunjuk ke log yang relevan.

**Mengganti gambar tanpa mengganti nama file:** deploy mendeteksi perubahan di `public/media` dan mengosongkan cache gambar teroptimasi. Cache sengaja disimpan 30 hari (`minimumCacheTTL` di `next.config.mjs`) — tanpa itu, PNG master berukuran belasan MB akan di-encode ulang tiap menit.

---

## 11. Checklist go-live

- [ ] `deploy.sh` selesai dengan `Live: <id>`
- [ ] `https://<SITE_DOMAIN>/en` dan `/id` tampil benar di desktop dan HP
- [ ] Halaman brand menampilkan gambar berbahasa sesuai (mis. showcase 128: "First Local Skincare…" di `/en`, "Skincare lokal pertama…" di `/id`)
- [ ] Unduhan PDF di halaman Investor & Governance berfungsi
- [ ] Sertifikat HTTPS valid (gembok di browser)
- [ ] `sudo ufw status` hanya menampilkan 22, 80, 443
- [ ] `ss -tlnp` — 3000, 5432, 8333, 9333, 8080, 8888 hanya di `127.0.0.1`
- [ ] `pgbackrest info` menampilkan full backup, **repo2 off-site aktif**, dan uji restore sudah pernah berhasil
- [ ] Pemantau uptime eksternal aktif
- [ ] `deploy.sh rollback` sudah pernah dicoba sekali

---

## 12. Siap untuk fase backend

Yang sudah tersedia di server begitu runbook ini selesai:

| Kebutuhan fase backend | Sudah ada |
|---|---|
| Database | PostgreSQL 17, database `akasha_cms`, role `akasha_app` (§4.3), backup + PITR (§5) |
| Object storage | SeaweedFS S3 di `127.0.0.1:8333`, bucket `akasha-media` & `akasha-documents`, kredensial aplikasi (§6) |
| Konfigurasi | `/etc/akasha/web.env` dengan nama variabel yang sudah dipesan (§8.1) |
| Akses publik ke aset | Blok `ASSETS_DOMAIN` di Caddyfile — tinggal di-uncomment |
| Susunan aset | `public/media` & `public/documents` sudah memakai susunan kunci yang sama dengan bucket tujuan, jadi migrasi aset cukup menyalin folder apa adanya |

Yang masih harus diputuskan di fase itu: upgrade RAM ke 8 GB, dan pembaruan aturan di `AGENTS.md` §13 yang saat ini masih melarang backend.
