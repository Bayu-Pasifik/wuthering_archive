import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
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
                pinSpacing: true
            }
        })
        clipAnimation.to(".mask-clip-path", {
            width: "100vh",
            height: "100vh",
            borderRadius: 0
        })
    })
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-36 flex flex-col item-center gap-5">
        <p className="font-general text-sm uppercase md:text[10px] text-center">
          Welcome to Wuthering Archive
        </p>
        <div className="mt-5 text-center text-4xl uppercase leading-[0.8] md:text-[6rem]">
            Discover the world of Solaris 3 Here!.
        </div>
        <div className="about-subtext">
          <p>
            Wuthering Archive place where you can see archive of Wuthering Waves
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="/images/backdrop.jpg"
            alt="background"
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
