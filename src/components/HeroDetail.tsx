import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const HeroDetail: React.FC = () => {
  useGSAP(() => {
    // Set initial styles for background
    gsap.set("#background", {
      clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
      borderRadius: "0% 0% 40% 10%",
    });

    gsap.from("#background", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0% 0% 0% 0%",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#background",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
    gsap.fromTo(
      "#text-container",
      {
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      },
      {
        clipPath: "polygon(14% 0, 72% 0, 88% 90%, 0 95%)",
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: "#background",
          start: "center center",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  });

  return (
    <>
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-black" id="background">
        <img
          src="images/background.png"
          alt="Backdrop"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-black opacity-60" />

      {/* Text Container */}
      <div
        id="text-container"
        className="relative z-20 flex flex-col h-full items-center justify-between p-14 text-center text-white"
      >
        <h1 className="text-8xl font-bold font-circular mt-52 uppercase">
          Resonators
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Resonators are obtainable characters in Wuthering Waves. Individuals
          with the ability to resonate with certain objects and manipulate their
          frequencies are known as Resonators.
        </p>
      </div>
    </>
  );
};

export default HeroDetail;
