interface SelectionCardProps {
  source: string;
  title: string;
  description: string;
  link: string;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  source,
  title,
  description,
  link,
}) => {
  return (
    <div className="relative h-72 w-full flex items-center justify-center rounded-lg shadow-md group">
      {/* Wrapper with overflow-hidden */}
      <div className="relative h-full w-full bg-slate-500 text-center text-white flex flex-col items-center justify-end rounded-lg overflow-hidden">
        {/* Title and Description Section */}
        <div className="relative z-10 flex flex-col items-center justify-center pt-24 px-4">
          <p className="mt-5 text-2xl font-bold font-zentry">{title}</p>
        </div>
      </div>

      {/* Image - Muncul di atas saat hover */}
      <img
        src={source}
        alt={title}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 object-cover w-64 h-64 rounded-lg transition-all duration-300 group-hover:top-[-100px] group-hover:scale-125 z-20"
      />
    </div>
  );
};

export default SelectionCard;
