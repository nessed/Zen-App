"use client";
import Link from "next/link";
import { useState } from "react";
import { Play, Pause } from "lucide-react"; // Import Lucide icons for play and pause
import CountdownTimer from "../components/CountdownTimer";

export default function Meditation() {
  const [isPlaying, setIsPlaying] = useState(false);

  // Function to toggle isPlaying state
  const toggleIsPlaying = () => {
    setIsPlaying((prevIsPlaying) => !prevIsPlaying);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="2000"
      className="relative flex items-center justify-center h-screen timer"
    >
      {/* Back Link positioned absolutely */}
      <div className="absolute top-4 left-4">
        <Link href="/main-after-auth-page" passHref>
          <div className="text-2xl text-white">
            Back
          </div>
        </Link>
      </div>
      
      {/* Centered Content */}
      <div className="flex flex-col items-center justify-center">
        <CountdownTimer
          className="font size-extralight timer"
          duration={15}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[7, 5, 2, 0]}
          isPlaying={isPlaying} // Pass isPlaying state to CountdownTimer
        />
        {/* Play/Pause button */}
        <button
          onClick={toggleIsPlaying}
          className="text-blue-500 focus:outline-none mt-10"
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
