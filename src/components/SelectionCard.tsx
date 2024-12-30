import Image from "next/image";
import React from "react";
// import { Link } from 'react-router-dom';

interface SelectionCardProps {
  source: string;
  title: string;
  description: string;
  attribute?: string;
  link?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  source,
  title,
  description,
  attribute,
  link,
}) => {
  const CardContent = () => (
    <>
      <div
        className={`relative h-full w-full ${
          attribute === "Aero"
            ? "bg-green-500"
            : attribute === "Glacio"
            ? "bg-blue-400"
            : attribute === "Electro"
            ? "bg-purple-500"
            : attribute === "Fusion"
            ? "bg-red-500"
            : attribute === "Spectro"
            ? "bg-yellow-500"
            : attribute === "Havoc"
            ? "bg-pink-950"
            : "bg-slate-500"
        } text-center text-white flex flex-col items-center justify-end rounded-lg overflow-hidden`}
      >
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">
          <p className="mt-5 text-2xl font-bold font-zentry">{title}</p>
        </div>
      </div>

      <Image
        width={1000}
        height={1000}
        src={source}
        alt={title}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 object-contain w-full h-full rounded-lg transition-all duration-300 z-0"
      />
    </>
  );

  return (
    <div className="relative h-72 w-full flex items-center justify-center rounded-lg shadow-md group hover:scale-105 transition-transform duration-300">
      {link ? (
        <a
          href={link}
          className="w-full h-full"
          aria-label={`View details for ${title}`}
        >
          <CardContent />
        </a>
      ) : (
        <CardContent />
      )}
    </div>
  );
};

export default SelectionCard;
