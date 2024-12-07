import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface TextSectionProps {
  title: string;
  content: string;
  bgColor: string;
  animationType: "fadeIn" | "slideIn" | "zoomIn";
}

const TextSection: React.FC<TextSectionProps> = ({ title, content, bgColor, animationType }) => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    if (titleRef.current && contentRef.current) {
      const titleElement = titleRef.current;
      const contentElement = contentRef.current;

      let titleAnimation;
      let contentAnimation;

      switch (animationType) {
        case "fadeIn":
          titleAnimation = gsap.fromTo(
            titleElement,
            { opacity: 0, y: 100 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              scrollTrigger: {
                trigger: titleElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          contentAnimation = gsap.fromTo(
            contentElement,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1.2,
              scrollTrigger: {
                trigger: contentElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          break;

        case "slideIn":
          titleAnimation = gsap.fromTo(
            titleElement,
            { x: -200, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: titleElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          contentAnimation = gsap.fromTo(
            contentElement,
            { x: 200, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1.2,
              scrollTrigger: {
                trigger: contentElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          break;

        case "zoomIn":
          titleAnimation = gsap.fromTo(
            titleElement,
            { scale: 0.5, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1,
              scrollTrigger: {
                trigger: titleElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          contentAnimation = gsap.fromTo(
            contentElement,
            { scale: 0.8, opacity: 0 },
            {
              scale: 1,
              opacity: 1,
              duration: 1.2,
              scrollTrigger: {
                trigger: contentElement,
                start: "top 80%",
                end: "bottom top",
                scrub: 1,
              },
            }
          );
          break;
      }

      titleAnimation;
      contentAnimation;
    }
  });

  return (
    <div
      className={`horizontal-section w-screen h-screen flex justify-center items-center ${bgColor}`}
    >
      <div className="text-center text-white px-10">
        <h1 ref={titleRef} className="text-5xl font-bold mb-4">{title}</h1>
        <p ref={contentRef} className="text-xl">{content}</p>
      </div>
    </div>
  );
};

export default TextSection;
