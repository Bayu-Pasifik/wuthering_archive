// pages/Home.tsx
"use client";
import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import TextSection from "../components/TextSection";
import VerticalScroll from "../components/VerticalScroll";
import VideoPlayer from "@/components/VideoPlayer";

export default function Home() {
  return (
    <div>
      {/* Horizontal Scroll Container */}
      <HorizontalScroll>
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
        <TextSection
          title="Wuthering Waves"
          content="Wuthering Waves is an action RPG game that takes place in a vast open world, filled with mystery, adventure, and intense combat. Players explore the remnants of a post-apocalyptic civilization while uncovering secrets and building their story."
          bgColor="bg-gray-800"
        />

        {/* Page 3: Teks tambahan tentang Wuthering Waves */}
        <TextSection
          title="Explore and Combat"
          content="Featuring a dynamic combat system and an immersive exploration experience, Wuthering Waves invites you to dive into its beautifully crafted world, face challenges, and connect with its characters."
          bgColor="bg-gray-700"
        />
      </HorizontalScroll>

      {/* Vertical Scroll Sections */}
      <div className="vertical-container">
        {/* Page 4 */}
        <VerticalScroll
          title="Welcome to the Vertical Scroll"
          bgColor="bg-green-500"
        />

        {/* Page 5 */}
        <VerticalScroll title="This is Page 5" bgColor="bg-purple-500" />
      </div>
    </div>
  );
}
