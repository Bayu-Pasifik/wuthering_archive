// pages/Home.tsx
"use client";
import React from "react";
import Hero from "@/components/Hero";
import About from "@/components/About";
import NavBar from "@/components/Navbar";
import Features from "@/components/Features";
import Story from "@/components/Story";


export default function Home() {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <Story />
    </div>
  );
}
