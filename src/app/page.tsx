import React from "react";
import VideoPlayer from "../components/VideoPlayer";

const Home: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <VideoPlayer src="/videos/footage.mp4" width="100%" height="auto"/>
    </div>
  );
};

export default Home;
