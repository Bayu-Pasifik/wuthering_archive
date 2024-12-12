import SelectionCard from "@/components/SelectionCard";

const ResonatorPage: React.FC = () => {
  return (
    <div className="h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="images/background.png"
          alt="Backdrop"
          className="min-h-screen h-full w-full object-cover opacity-85"
        />
      </div>

      <div className="relative z-20 flex h-full p-14">
        <div className="grid grid-cols-5 gap-4 w-full">
          {Array.from({ length: 9 }).map((_, index) => (
            <SelectionCard
              key={index}
              source="/images/male-rover.png"
              title="Sanhua"
              description=""
              link=""
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResonatorPage;
