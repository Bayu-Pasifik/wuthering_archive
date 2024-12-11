const ResonatorPage: React.FC = () => {
    return (
      <div className="h-screen relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="images/backdrop.jpg"
            alt="Backdrop"
            className="h-full w-full object-cover opacity-50"
          />
        </div>
  
        {/* Overlay Gradient */}
        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-r from-transparent via-black/70 to-black/90 z-10" />
  
        {/* Content: Centered Grid View */}
        <div className="relative z-20 flex items-center justify-center h-full">
          <div className="grid grid-cols-3 gap-4 w-3/4">
            {Array.from({ length: 9 }).map((_, index) => (
              <div
                key={index}
                className="h-24 w-full bg-blue-500 text-center text-white flex items-center justify-center rounded-lg shadow-md"
              >
                Item {index + 1}
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default ResonatorPage;
  