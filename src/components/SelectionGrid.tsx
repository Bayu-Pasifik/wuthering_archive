"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SelectionCard from "@/components/SelectionCard";

interface SelectionGridProps {
  data: { source: string; title: string; description: string,attribute?: string }[]; // Update data type
}

const SelectionGrid: React.FC<SelectionGridProps> = ({ data }) => {
  const { ref, inView } = useInView({
    threshold: 0.1, // Element is considered visible if 10% is in the viewport
    triggerOnce: false, // Animation can be repeated when entering the viewport
  });

  return (
    <section ref={ref} className="min-h-dvh bg-black w-screen text-blue-50">
      <div className="grid grid-cols-1 md:grid-cols-6 grid-rows-6 gap-6 p-12">
        {/* Iterate over each item in the data array */}
        {data.map((item, index) => {
          const direction = index % 2 === 0 ? -100 : 100; // Declaration of direction inside map

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
                attribute={item.attribute}
              />
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default SelectionGrid;
