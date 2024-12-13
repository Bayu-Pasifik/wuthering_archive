"use client";
import { motion } from "framer-motion";
import HeroDetail from "@/components/HeroDetail";
import SelectionCard from "@/components/SelectionCard";

const ResonatorPage: React.FC = () => {
  return (
    <div className="h-screen relative bg-black">
      <HeroDetail />
      <section className="min-h-dvh bg-black w-screen text-blue-50">
        <div className="grid grid-cols-6 grid-rows-6 gap-6 p-12">
          {Array.from({ length: 26 }).map((_, index) => {
            const direction = index % 2 === 0 ? -100 : 100; // Genap: dari atas, Ganjil: dari bawah

            return (
              <motion.div
              key={index}
              className="p-3"
              initial={{ opacity: 0,y: direction }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <SelectionCard
                  source={`/images/yang-yang.png`}
                  title={`Resonator ${index + 1}`}
                  description={`Resonator ${index + 1} description`}
                  link={`/resonators/${index + 1}`}
                />
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ResonatorPage;
