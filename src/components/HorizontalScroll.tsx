// components/HorizontalScroll.tsx
import React, { ReactNode, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollProps {
  children: ReactNode; // Menambahkan tipe untuk children
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current;
      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${container?.offsetWidth}`,
        },
      });
    }
  });

  return (
    <div
      ref={containerRef}
      className="horizontal-container flex w-[300vw] h-screen overflow-hidden"
    >
      {children}
    </div>
  );
};

export default HorizontalScroll;
