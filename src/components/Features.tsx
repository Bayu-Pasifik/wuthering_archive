import BentoCard from "./BentoCard";

const Features: React.FC = () => {
  return (
    <section className="bg-black pb-52">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-32">
          <p className="font-circular text-lg text-blue-50">
            Dive Into Wuthering Archive
          </p>
        </div>
        <p className="font-circular max-w-md text-lg text-blue-50 opacity-50">
          Embark on an extraordinary adventure in the captivating world of
          Wuthering Waves. Explore vast landscapes, encounter enigmatic
          characters, and engage in thrilling battles. This open-world RPG
          offers a seamless blend of immersive storytelling, strategic combat,
          and deep customization.
        </p>
        <div className="border-hsla relative mb-8 h-96 w-full overflow-x-hidden rounded-md md:h-[65vh]">
          <BentoCard
            title="Extraordinary Adventure"
            src="videos/features-1.mp4"
            description="Embark on an epic adventure in the vast and mysterious world of Wuthering Waves. Explore stunning landscapes, from futuristic cities to ancient ruins. Encounter unique characters and unravel the secrets of a world on the brink of change. With dynamic combat and deep customization, your journey is sure to be unforgettable."
            link=""
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
