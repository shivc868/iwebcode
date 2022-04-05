import React, { useState } from "react";
import { TimeFrameData } from "./Helper";

const TimeFrame = () => {
  const [activeTimeFrame, setActiveTimeFrame] = useState("1");
  return (
    <div className="timeframe mt-4">
      <h4>Timeframe</h4>
      <div className="mt-2">
        {TimeFrameData.map((item) => {
          return (
            <button
              onClick={() => setActiveTimeFrame(item.days)}
              className={`timeframe-btn border-0 px-3 py-2 ${
                activeTimeFrame == item.days ? "active" : ""
              }`}
              key={item.id}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default TimeFrame;
