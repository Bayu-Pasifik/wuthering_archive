// components/TextSection.tsx
import React from "react";

interface TextSectionProps {
  title: string;
  content: string;
  bgColor: string;
}

const TextSection: React.FC<TextSectionProps> = ({ title, content, bgColor }) => (
  <div className={`horizontal-section w-screen h-screen ${bgColor} flex justify-center items-center`}>
    <div className="text-center text-white px-10">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-xl">{content}</p>
    </div>
  </div>
);

export default TextSection;
