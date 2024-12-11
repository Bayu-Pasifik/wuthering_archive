import { MouseEvent, useRef } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Story: React.FC = () => {
  const frameRef = useRef<HTMLImageElement | null>(null);
  const handleMouseLeave = () => {};
  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (!frameRef.current) return;
    const { left, top, width, height } =
      frameRef.current.getBoundingClientRect();
    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    frameRef.current.style.transform = newTransform;
  };
  return (
    <section id="story" className="min-h-dvh bg-black w-screen text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text=[10px]">
          Dive Into Wuthering Archive
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="<b>Disc<b>o</b>ver the <b>Archive</b> of <b>Wuthering</b> Waves <b>Here</b>!."
            containerClass="mt-5 text-center !text-white pointer-events-none 
            mix-blend-difference z-10 relative"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img
                  ref={frameRef}
                  onMouseLeave={handleMouseLeave}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseLeave}
                  onMouseUp={handleMouseLeave}
                  src="/images/story.png"
                  alt="story"
                  className="object-contain"
                />
              </div>
            </div>
            {/* for the rounded corner */}
            <svg
              className="invisible absolute size-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur
                    in="SourceGraphic"
                    stdDeviation="8"
                    result="blur"
                  />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite
                    in="SourceGraphic"
                    in2="flt_tag"
                    operator="atop"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </div>
        <div className="-mt-80 flex w-full justify-center md:-mt-64 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start">
            <p className="mt-3 max-w-sm text-center font-circular text-violet-50 md:text-start">
              Here Where you can see all archive of Wuthering Waves include
              lore, resonators, echoes, weapons and more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
