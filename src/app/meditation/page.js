"use client";
import Link from "next/link";
import Image from "next/image";
import SimpleSlider from "../components/SimpleSlider";
import CountdownTimer from "../components/CountdownTimer";
import { useState } from "react";
import { Play, Pause } from "lucide-react"; // Import Lucide icons for play and pause

export default function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle isPlaying state
  const toggleIsPlaying = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };
  return (
    <div className="flex items-center justify-center h-screen timer">
      <div className="flex items-center justify-center">
        <CountdownTimer
          className="font-extralight timer"
          duration={15}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          isPlaying={isPlaying} // Pass isPlaying state to CountdownTimer
        />
        {/* Play/Pause button */}
        <button
          onClick={toggleIsPlaying}
          className="text-blue-500 focus:outline-none"
        >
          {isPlaying ? (
            <Pause
              className="px-2 py-2 border rounded-full hover:bg-white hover:text-gray-500 text-white"
              size={30}
            />
          ) : (
            <Play
              className="px-2 py-2 border rounded-full hover:bg-white hover:text-gray-500 text-white"
              size={30}
            />
          )}
        </button>
      </div>
    </div>
  );
}