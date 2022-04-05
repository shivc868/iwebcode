import React, { useState } from "react";
import { TierData } from "./Helper";
const Tier = () => {
  const [activeTier, setActiveTier] = useState(3);
  const activeHandler = (value) => {
    setActiveTier(value);
  };
  return (
    <div className="tier mt-3 mb-2">
      <span>Select Tier</span>
      <div className="d-flex mt-2 justify-content-between flex-wrap">
        {TierData.map((item) => {
          return (
            <button
              className={`tier-btn border-0 px-3 py-2 ${
                activeTier === item.id ? "active" : ""
              }`}
              onClick={() => activeHandler(item.id)}
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

export default Tier;
