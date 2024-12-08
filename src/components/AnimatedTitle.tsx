import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTitlePorps {
  title: string;
  containerClass: string;
}

const AnimatedTitle: React.FC<AnimatedTitlePorps> = ({
  title,
  containerClass,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const titleAnimation = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "100 bottom",
          end: "center bottom",
          toggleActions: "play none none reverse",
        },
      });

      titleAnimation.to(
        ".animated-word",
        {
          opacity: 1,
          transform: "translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)",
          ease: "power2.inOut",
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert(); // Clean up on unmount
  }, []);

  return (
    <div 
    ref={containerRef}
    className= {`animated-title ${containerClass}`}>
      {title.split("<br/>").map((char, index) => (
        <div
          key={index}
          className="flex-center max-w-full flex-wrap px-10 gap-2 md:gap-3"
        >
          {char.split(" ").map((word, index) => (
            <span
              key={index}
              className="animated-word"
              dangerouslySetInnerHTML={{ __html: word }}
            />
          ))}
        </div>
      ))}
    </div>
  );
};
export default AnimatedTitle;
