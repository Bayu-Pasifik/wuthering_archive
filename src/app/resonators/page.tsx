"use client";

import { useEffect } from "react";
import HeroDetail from "@/components/HeroDetail";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useResonators } from "../hooks/useResonators";
import { LayoutTemplate } from "@/components/LayoutTemplate";
import SelectionCard from "@/components/SelectionCard";

const ResonatorPage: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const { data: resonatorData, isLoading, isError, error } = useResonators();

  useEffect(() => {
    // Tambahkan class ke body
    document.body.classList.add("bg-black");

    // Bersihkan class saat keluar dari halaman
    return () => {
      document.body.classList.remove("bg-black");
    };
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error: {error?.message}</div>;

  return (
    <div className="h-screen relative w-screen min-h-screen">
      <HeroDetail />
      <section
        ref={ref}
        className="p-10 min-h-dvh w-screen text-blue-50"
      >
        <LayoutTemplate layout="card">
          {resonatorData?.map((resonator, index) => {
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
