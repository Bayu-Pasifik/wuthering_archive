import Image from "next/image";

interface SelectionCardProps {
  source: string;
  title: string;
  description: string;
  attribute?: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  source,
  title,
  description,
  attribute,
}) => {
  return (
    <div className="relative h-72 w-full flex items-center justify-center rounded-lg shadow-md group">
      {/* Wrapper with overflow-hidden */}
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
        {/* Title and Description Section */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">
          <p className="mt-5 text-2xl font-bold font-zentry">{title}</p>
        </div>
      </div>

      {/* Image - Positioned below the title */}
      <Image
        src={source}
        alt={title}
        width={1000}
        height={1000}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 object-contain w-full h-full rounded-lg transition-all duration-300 z-0"
      />
    </div>
  );
};

export default SelectionCard;
