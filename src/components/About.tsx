import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col item-center gap-5">
        <p className="font-general text-sm uppercase md:text[10px] text-center">
          Welcome to Wuthering Archive
        </p>
        <AnimatedTitle
          title="<b>Disc<b>o</b>ver the w<b>o</b>rld <b>o<b/>f S<b>o</b>laris 3 H<b>e</b>re!."
          containerClass="mt-5 text-center !text-black" 
        />
        <div className="about-subtext">
          <p>
            Wuthering Archive place where you can see archive of Wuthering Waves
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="images/backdrop.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
