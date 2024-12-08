// pages/Home.tsx
"use client";
import React from "react";
import HorizontalScroll from "../components/HorizontalScroll";
import TextSection from "../components/TextSection";
import VerticalScroll from "../components/VerticalScroll";
import VideoPlayer from "@/components/VideoPlayer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NavBar from "@/components/Navbar";

// export default function Home() {
//   return (
//     <div>
//       {/* Horizontal Scroll Container */}
//       <HorizontalScroll>
//         {/* Page 1: VideoPlayer */}
//         <div
//           id="video"
//           className="horizontal-section w-screen h-screen bg-black flex items-center justify-center"
//         >
//           <VideoPlayer
//             src="/videos/footage.mp4"
//             autoplay={true}
//             muted={true}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Page 2: Text with Animation */}
//         <TextSection
//           title="Wuthering Waves"
//           content="Wuthering Waves is an action RPG game that takes place in a vast open world..."
//           bgColor="bg-gray-800"
//           animationType="fadeIn"
//         />

//         {/* Page 3: Text with Animation */}
//         <TextSection
//           title="Explore and Combat"
//           content="Featuring a dynamic combat system and an immersive exploration experience..."
//           bgColor="bg-gray-700"
//           animationType="slideIn"
//         />
//       </HorizontalScroll>

//       {/* Vertical Scroll Sections */}
//       <div className="vertical-container">
//         {/* Page 4 */}
//         <VerticalScroll
//           title="Welcome to the Vertical Scroll"
//           bgColor="bg-green-500"
//         />

//         {/* Page 5 */}
//         <VerticalScroll title="This is Page 5" bgColor="bg-purple-500" />
//       </div>
//     </div>
//   );
// }


export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar/>
      <Hero/>
      <About/>
    </div>
  )
}
