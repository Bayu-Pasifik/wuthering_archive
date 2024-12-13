"use client";
import HeroDetail from "@/components/HeroDetail";
import SelectionCard from "@/components/SelectionCard";
import SelectionGrid from "@/components/SelectionGrid";

const ResonatorPage: React.FC = () => {
  const resonatorData = Array.from({ length: 26 }).map((_, index) => ({
    source: `/images/yang-yang.png`,
    title: `Resonator ${index + 1}`,
    description: `Resonator ${index + 1} description`,
    link: `/resonators/${index + 1}`,
  }));
  return (
    <div className="h-screen relative bg-black">
      <HeroDetail />
      <SelectionGrid data={resonatorData} />
    </div>
  );
};

export default ResonatorPage;
