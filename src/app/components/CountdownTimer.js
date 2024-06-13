import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const CountdownTimer = ({ duration, colors, colorsTime, isPlaying }) => (
  <div className="flex items-center justify-center">
    <CountdownCircleTimer
      isPlaying={isPlaying} // Pass isPlaying state to control timer
      strokeWidth={1}
      size={444} // Adjust size as needed
      duration={15} // Provide a default value if duration is undefined
      colors={["#004777", "#F7B801", "#A30000", "#A30000"]} // Provide default colors array if not passed
      onComplete={() => {
        console.log("Countdown completed");
      }}
    >
      {({ remainingTime }) => (
        <div className="text-4xl timer text-white font-bold">
          {remainingTime}
        </div>
      )}
    </CountdownCircleTimer>
  </div>
);

export default CountdownTimer;
