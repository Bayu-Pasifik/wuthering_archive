import AnimatedTitle from "./AnimatedTitle";

const Story: React.FC = () => {
  return (
    <div id="story" className="min-h-dvh bg-black w-screen text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24">
        <p className="font-general text-sm uppercase md:text=[10px]">
          Dive Into Wuthering Archive
        </p>
        <div className="relative size-full">
          <AnimatedTitle
            title="<b>Disc<b>o</b>ver the <b>Archive</b> of <b>Wuthering</b> Waves <b>Here</b>!."
            containerClass="mt-5 text-center !text-white pointer-events-none 
            mix-blend-difference z-10 relative"
          />
          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content">
                <img src="/images/story.png" alt="story"
                className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
