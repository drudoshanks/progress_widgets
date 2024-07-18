"use client";

import React, { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Slider from "@mui/material/Slider";

const CircularSlider: React.FC = () => {
  const [value, setValue] = useState<number>(0);

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300">
        <CircularProgressbar
          value={value * 10}
          text={`${value}`}
          className=''
        // styles={buildStyles({
        //   textSize: "16px",
        //   pathColor: `rgba(62, 152, 199, ${value / 10})`,
        //   textColor: "#f88",
        //   trailColor: "#d6d6d6",
        // })}
        />
        <Slider
          value={value}
          min={0}
          max={10}
          step={1}
          onChange={handleSliderChange}
          aria-labelledby="continuous-slider"
        />
      </div>
    </div>
  );
};

export default CircularSlider;
