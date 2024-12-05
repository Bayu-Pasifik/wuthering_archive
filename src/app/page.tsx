"use client";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import VideoPlayer from "../components/VideoPlayer";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (typeof window !== "undefined") {
      const container = containerRef.current;

      const sections = gsap.utils.toArray<HTMLElement>(".horizontal-section");

      // Animasi horizontal scroll
      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: container,
          pin: true,
          scrub: 1,
          end: () => `+=${container?.offsetWidth}`, // Akhir horizontal scroll
        },
      });
    }
  });

  return (
    <div>
      {/* Horizontal Scroll Container */}
      <div
        ref={containerRef}
        className="horizontal-container flex w-[300vw] h-screen overflow-hidden"
      >
        {/* Page 1: VideoPlayer */}
        <div
          id="video"
          className="horizontal-section w-screen h-screen bg-black flex items-center justify-center"
        >
          <VideoPlayer
            src="/videos/footage.mp4"
            autoplay={true}
            muted={true}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Page 2: Teks tentang Wuthering Waves */}
        <div className="horizontal-section w-screen h-screen bg-gray-800 flex justify-center items-center">
          <div className="text-center text-white px-10">
            <h1 className="text-5xl font-bold mb-4">Wuthering Waves</h1>
            <p className="text-xl">
              Wuthering Waves is an action RPG game that takes place in a vast
              open world, filled with mystery, adventure, and intense combat.
              Players explore the remnants of a post-apocalyptic civilization
              while uncovering secrets and building their story. check this out
            </p>
          </div>
        </div>

        {/* Page 3: Teks tambahan tentang Wuthering Waves */}
        <div className="horizontal-section w-screen h-screen bg-gray-700 flex justify-center items-center">
          <div className="text-center text-white px-10">
            <h1 className="text-5xl font-bold mb-4">Explore and Combat</h1>
            <p className="text-xl">
              Featuring a dynamic combat system and an immersive exploration
              experience, Wuthering Waves invites you to dive into its
              beautifully crafted world, face challenges, and connect with its
              characters.
            </p>
          </div>
        </div>
      </div>

      {/* Vertical Scroll Sections */}
      <div className="vertical-container">
        {/* Page 4 */}
        <div className="vertical-section h-screen bg-green-500 flex justify-center items-center">
          <h1 className="text-white text-4xl">
            Welcome to the Vertical Scroll
          </h1>
        </div>

        {/* Page 5 */}
        <div className="vertical-section h-screen bg-purple-500 flex justify-center items-center">
          <h1 className="text-white text-4xl">This is Page 5</h1>
        </div>
      </div>
    </div>
  );
}

// export default Home;
