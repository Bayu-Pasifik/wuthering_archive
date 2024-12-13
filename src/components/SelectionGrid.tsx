"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SelectionCard from "@/components/SelectionCard";

interface SelectionGridProps {
  data: {
    source: string;
    title: string;
    description: string;
    link: string;
  }[];
}

const SelectionGrid: React.FC<SelectionGridProps> = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Elemen dianggap terlihat jika 10% masuk ke viewport
    triggerOnce: false, // Animasi bisa diulang saat masuk viewport
  });

  return (
    <section ref={ref} className="min-h-dvh bg-black w-screen text-blue-50">
      <div className="grid grid-cols-6 grid-rows-6 gap-6 p-12">
        {data.map((item, index) => {
          const direction = index % 2 === 0 ? -100 : 100;
          return (
            <motion.div
              key={index}
              className="p-3"
              initial={{ opacity: 0, y: direction }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              exit={{ opacity: 0 }}
              transition={{
                duration: 0.5,
                delay: inView ? index * 0.2 : 0,
              }}
            >
              <SelectionCard
                source={item.source}
                title={item.title}
                description={item.description}
                link={item.link}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectionGrid;
