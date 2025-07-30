import React, { useState, useRef } from "react";
import { playGeneratedTone } from "../../utils/audioUtils";
import "./String.css";

function String({ number }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasAudio, setHasAudio] = useState(true);
  const audioRef = useRef(null);

  const handleClick = () => {
    if (audioRef.current && hasAudio) {
      audioRef.current.currentTime = 0; // Reset to beginning
      audioRef.current.play().catch((error) => {
        console.warn(`Could not play string ${number} sound:`, error);
        setHasAudio(false);
        // Fallback to generated tone
        playGeneratedTone(number);
      });
      setIsPlaying(true);

      // Reset playing state after audio finishes
      setTimeout(() => setIsPlaying(false), 1000);
    } else {
      // Fallback: generate tone and show visual feedback
      playGeneratedTone(number);
      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), 500);
    }
  };

  const handleAudioError = () => {
    console.warn(`Audio file for string ${number} not found`);
    setHasAudio(false);
  };

  return (
    <div className={`string ${isPlaying ? 'playing' : ''}`} onClick={handleClick}>
      <audio
        ref={audioRef}
        src={`/sounds/string${number}.mp3`}
        preload="auto"
        onError={handleAudioError}
      />
    </div>
  );
}

export default String;
