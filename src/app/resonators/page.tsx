"use client";

import { useState, useEffect } from "react";
import HeroDetail from "@/components/HeroDetail";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useResonators } from "../hooks/useResonators";
import { LayoutTemplate } from "@/components/LayoutTemplate";
import SelectionCard from "@/components/SelectionCard";
import FilterComponent from "@/components/Filter";

const ResonatorPage: React.FC = () => {
  const { ref, inView } = useInView({
    // threshold: 0.1,
    triggerOnce: false,
  });

  const { data: resonatorData, isLoading, isError, error } = useResonators();
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    document.body.classList.add("bg-black");
    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  const filteredData = resonatorData?.filter((resonator) => {
    // First apply search filter
    const matchesSearch =
      searchTerm === "" ||
      resonator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resonator.birthPlace?.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) return false;

    // Then apply category filter
    if (selectedFilter === "all") return true;

    // Filter for rarity
    if (selectedFilter === "4-star")
      return resonator.rarity.title === "4 Stars";
    if (selectedFilter === "5-star")
      return resonator.rarity.title === "5 Stars";

    // Filter for weapons
    if (
      ["Sword", "Pistols", "Rectifier", "Broadblade", "Gauntlets"].includes(
        selectedFilter
      )
    ) {
      return resonator.weapon === selectedFilter;
    }

    // Filter for elements/attributes
    return resonator.attribute === selectedFilter;
  });

  return (
    <div className="h-screen relative w-screen min-h-screen">
      <HeroDetail />
      <FilterComponent
        onFilterChange={setSelectedFilter}
        onSearch={setSearchTerm}
      />
      <section ref={ref} className="p-10 min-h-dvh w-screen text-blue-50">
        <LayoutTemplate layout="card">
          {filteredData?.map((resonator, index) => {
            const direction = index % 2 === 0 ? -100 : 100;
            return (
              <motion.div
                key={resonator.name}
                className="p-3"
                initial={{ opacity: 0, y: direction }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: inView ? index * 0.1 : 0,
                }}
              >
                <SelectionCard
                  source={resonator.icon}
                  title={resonator.name}
                  description={resonator.birthPlace}
                  attribute={resonator.attribute}
                  link={`/resonators/${resonator.name.replace(/\s+/g, "_").replace("The_", "")}`}
                />
              </motion.div>
            );
          })}
        </LayoutTemplate>
      </section>
    </div>
  );
};

export default ResonatorPage;
