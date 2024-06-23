import React from "react";

export default function Journal() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 flex">
        <div className="flex-center text-center">Journal</div>
      </div>
      <div className="w-2/3  p-4 flex flex-col justify-between bg-opacity-40 bg-blue-400">
        <div className="h-full">
          <h2 className="text-2xl font-bold text-white mb-4"> </h2>
          <p className="text-white ">Hello</p>
        </div>
        <div className="mt-4 ">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Enter your text here"
          />
        </div>
      </div>
    </div>
  );
}
