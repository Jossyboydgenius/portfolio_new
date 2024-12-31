"use client";
import React, { useEffect, useState } from "react";

const TextSlider = () => {
  const animHeight = 30; // Height of the sliding animation
  const [currentIndex, setCurrentIndex] = useState(0);
  const textItems = [
    "Software Engineer",
    "Full stack Developer",
    "UI/UX Designer",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % textItems.length);
    }, 2000); // Interval for each slide (2 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative overflow-hidden h-[30px] w-full flex items-center">
      <div
        className="absolute transition-transform duration-500 ease-in-out"
        style={{
          transform: `translateY(-${currentIndex * animHeight}px)`,
        }}
      >
        {textItems.map((item, index) => (
          <p
            key={index}
            className="font-semibold text-white/70 tracking-wider mb-1 whitespace-nowrap"
          >
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TextSlider;
