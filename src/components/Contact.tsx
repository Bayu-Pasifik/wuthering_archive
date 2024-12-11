import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

interface ImageClipBoxProps {
  src: string;
  clipClass?: string;
}

const ImageClipBox: React.FC<ImageClipBoxProps> = ({ src, clipClass = "" }) => (
  <div className={`absolute top-0 left-0 h-full w-full ${clipClass}`}>
    <img
      src={src}
      alt="Background"
      className="h-full w-full object-cover object-center"
    />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="relative my-20 w-full px-10">
      {/* Container with Background */}
      <div className="relative min-h-[500px] rounded-lg overflow-hidden bg-black">
        {/* Fullscreen Background */}
        <ImageClipBox src="/images/contact_bg.jpg" clipClass="z-0" />

        <div className="absolute top-0 right-0 h-full w-2/3 bg-gradient-to-r from-transparent via-black/90 to-black/100 z-10" />
        <div className="relative z-20 flex items-center justify-center h-full md:justify-end">
          <div className="md:w-1/2 text-blue-50 text-center px-5">
            <AnimatedTitle
              title="let&#39;s b<b>u</b>ild the <br/> new era of <br/> g<b>a</b>ming t<b>o</b>gether."
              containerClass="special-font !text-5xl md:!text-6xl font-zentry !font-black !leading-[.9] mt-24"
            />
            <Button title="contact us" containerClass="mt-10 cursor-pointer mx-auto md:mx-0" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
