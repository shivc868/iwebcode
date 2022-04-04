import React from "react";

const TimeFrame = () => {
  return (
    <div className="timeframe mt-3">
      <h4>Timeframe</h4>
      <div className="mt-3">
        <button className="timeframe-btn active border-0 px-3 py-2 ">
          1 Day
        </button>
        <button className="timeframe-btn  border-0 px-3 py-2 ms-1">
          7 Days
        </button>
        <button className="timeframe-btn  border-0 px-3 py-2 ms-1">
          30 Days
        </button>
        <button className="timeframe-btn  border-0 px-3 py-2 ms-1">
          1 Year
        </button>
        <button className="timeframe-btn  border-0 px-3 py-2 ms-1">
          5 Years
        </button>
      </div>
    </div>
  );
};

export default TimeFrame;
