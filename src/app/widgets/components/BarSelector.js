"use client";

import React, { useState } from "react";

const BarSelector = () => {
  const [selectedBar, setSelectedBar] = useState(1);

  const handleBarClick = (value) => {
    setSelectedBar(value);
  };

  return (
    <div className="flex">
      <div className="items-center justify-center">
        {[5, 4, 3, 2, 1].map((value) => {
          let _width = value * 40;
          return (
            <div 
              onClick={() => handleBarClick(value)} 
              className="m-2 rounded-lg mx-auto" 
              style={{ width: _width, height: 20, backgroundColor:(selectedBar >= value ? "#87CDF6" : "white") }} 
              key={value} />
          );
        })}
      </div>
    </div>
  );
};

export default BarSelector;
