"use client";

import React, { useState } from "react";


const BarSelector: React.FC = () => {
  const [selectedBar, setSelectedBar] = useState<number>(1);

  const handleBarClick = (value: number) => {
    setSelectedBar(value);
  };

  return (
    <div className="flex">
      <div className="items-center justify-center">
        {[5, 4, 3, 2, 1].map((value) => {
          let _width = 40 + value * 20;
          return (
            <div
              onClick={() => handleBarClick(value)}
              className="m-2 rounded-lg mx-auto"
              style={{
                width: _width,
                height: 20,
                cursor: 'pointer',
                backgroundColor:
                  selectedBar >= value ? '#34d399' : '#d1d5db', // Example colors, adjust as needed
              }}
              key={value}
              data-testid={`bar-${value}`} // Add data-testid attribute
            />
          );
        })}
      </div>
    </div>
  );
};

export default BarSelector;
