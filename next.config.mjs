/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "placehold.co" },
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
      { protocol: "https", hostname: "nestlepurelife.id" },
      { protocol: "https", hostname: "hairenergy.co" },
      { protocol: "https", hostname: "wonhaefoods.com" },
      { protocol: "https", hostname: "makarizoprofessional.com" },
      { protocol: "https", hostname: "makeitperfume.com" },
      { protocol: "https", hostname: "omoidefoods.com" },
      { protocol: "https", hostname: "floatysnack.com" },
      { protocol: "https", hostname: "fitmeup.id" },
    ],
  },
};

export default nextConfig;
