import React, { useState } from "react";

const Tier = () => {
  const [activeTier, setActiveTier] = useState("USE BALANCE");
  const activeHandler = (value) => {
    setActiveTier(value);
  };
  return (
    <div className="tier mt-3 mb-2">
      <span>Select Tier</span>
      <div className="d-flex mt-2 justify-content-between flex-wrap">
        <button
          onClick={() => activeHandler("tier 1")}
          className={`tier-btn   border-0 px-3 py-2 ${
            activeTier === "tier 1" && "active"
          }`}
        >
          Tier 1
        </button>
        <button
          onClick={() => activeHandler("tier 2")}
          className={`tier-btn   border-0 px-3 py-2 ${
            activeTier === "tier 2" && "active"
          }`}
        >
          Tier 2
        </button>
        <button
          onClick={() => activeHandler("tier 3")}
          className={`tier-btn   border-0 px-3 py-2 ${
            activeTier === "tier 3" && "active"
          }`}
        >
          Tier 3
        </button>
        <button
          onClick={() => activeHandler("tier 4")}
          className={`tier-btn   border-0 px-3 py-2 ${
            activeTier === "tier 4" && "active"
          }`}
        >
          Tier 4
        </button>
        <button
          onClick={() => activeHandler("tier 5")}
          className={`tier-btn   border-0 px-3 py-2 ${
            activeTier === "tier 5" && "active"
          }`}
        >
          Tier 5
        </button>
      </div>
    </div>
  );
};

export default Tier;
