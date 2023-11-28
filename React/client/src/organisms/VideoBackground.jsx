import React, { useState, useRef, useEffect } from "react";
import "../static/stylesheet.css";
import dadVideo from "../static/June.Dad.Grief.mov";

function VideoBackground() {
  const [isPlaying, setIsPlaying] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    // Make sure the video is playing when the component mounts
    setIsPlaying(true);
  }, []);


  return (
    <div className="video-container">
      <video autoPlay loop muted playsInline ref={videoRef} id="video">
        <source src={dadVideo} type="video/mp4" />
      </video>
  
    </div>
  );
}

export default VideoBackground;
