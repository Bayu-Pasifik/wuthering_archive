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
            title="Explore The World"
            src="videos/features-1.mp4"
            description="Embark on an epic adventure in the vast and mysterious world of Wuthering Waves. Explore stunning landscapes, from futuristic cities to ancient ruins. Encounter unique characters and unravel the secrets of a world on the brink of change. With dynamic combat and deep customization, your journey is sure to be unforgettable."
            link=""
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              title="Lore"
              src="videos/features-2.mp4"
              description="Experience a world rich in lore and mystery. Wuthering Waves offers a captivating narrative that shapes every aspect of gameplay. Uncover the secrets of a world on the brink of change and leave your mark on its history."
              link=""
            />
          </div>
          <div className="bento-tilt_1 row-span-1 md:col-span-1 ms-32 md:ms-0">
            <BentoCard
              title="Characters"
              src="videos/features-3.mp4"
              description="Build deep connections with your favorite characters. Enjoy heartwarming interactions and unlock hidden stories."
              link=""
            />
          </div>
          <div className="bento-tilt_1 row-span-1 md:col-span-1 me-14 md:me-0">
            <BentoCard
              title="Echo"
              src="videos/features-5.mp4"
              description="Become a master of time with Wuthering Waves' deep Echo system. Collect Echo Fragments to level up your Resonance and unlock powerful new abilities. Discover hidden Echo Resonances throughout the world to gain unique buffs and customize your Echo skills to fit your playstyle."
              link=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
