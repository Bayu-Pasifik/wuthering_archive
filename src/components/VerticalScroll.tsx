// components/VerticalScroll.tsx
import React from "react";

interface VerticalScrollProps {
  title: string;
  bgColor: string;
}

const VerticalScroll: React.FC<VerticalScrollProps> = ({ title, bgColor }) => (
  <div className={`vertical-section h-screen ${bgColor} flex justify-center items-center`}>
    <h1 className="text-white text-4xl">{title}</h1>
  </div>
);

export default VerticalScroll;
