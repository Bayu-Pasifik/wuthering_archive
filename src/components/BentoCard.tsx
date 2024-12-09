interface Props {
    src: string;
    title: string;
    description: string;
    link: string;
  }
  
  const BentoCard: React.FC<Props> = ({ src, title, description, link }) => {
    return (
      <div className="relative size-full">
        {/* Video Background */}
        <video
          src={src}
          className="absolute top-0 left-0 size-full object-center object-cover"
          loop
          muted
          autoPlay
        />
  
        {/* Faded Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/100 to-transparent"></div>
  
        {/* Content */}
        <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-100">
          <div>
            <h1 className="bento-title special-font">{title}</h1>
            {description && (
              <p className="mt-3 max-w-64 md:max-w-96 text-xs md:text-base">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    );
  };
  
  export default BentoCard;
  