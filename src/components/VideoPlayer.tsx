"use client";
import React, { useRef } from "react";

type VideoPlayerProps = {
  src: string;
  width?: string;
  height?: string;
  autoplay?: boolean;
  loop?: boolean;
  muted?: boolean;
  className?: string;
};

const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  width = "100%",
  height = "auto",
  autoplay = false,
  loop = true,
  muted = true, // Set muted ke true secara default
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  return (
    <div
      className={`video-container ${className}`}
      onClick={handleVideoClick}
      style={{ cursor: "pointer" }}
    >
      <video
        ref={videoRef}
        src={src}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        className={`w-full h-full object-cover ${className}`}
        style={{ display: "block" }}
      />
    </div>
  );
};

export default VideoPlayer;
