'use client';
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
  autoplay = true,
  loop = true,
  muted = false,
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
        width={width}
        height={height}
        autoPlay={autoplay}
        loop={loop}
        muted={muted}
        style={{ display: "block", width: "100%", height: "auto" }}
      />
    </div>
  );
};

export default VideoPlayer;
