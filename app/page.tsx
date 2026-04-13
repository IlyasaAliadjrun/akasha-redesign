import HeroCarousel from "@/components/home/HeroCarousel";
import DivisionCards from "@/components/home/DivisionCards";
import BentoGrid from "@/components/home/BentoGrid";
import SensoryStrip from "@/components/home/SensoryStrip";
import CompanyStatement from "@/components/home/CompanyStatement";

export default function HomePage() {
  return (
    <>
      <HeroCarousel />
      <DivisionCards />
      <BentoGrid />
      <SensoryStrip />
      <CompanyStatement />
    </>
  );
}
