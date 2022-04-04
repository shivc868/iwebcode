import React from "react";

const UseBalance = () => {
  return (
    <div className="d-flex use-balance mt-2 justify-content-between">
      <div className="flex-grow-1">
        <button className="use-balance-btn px-4 py-2 active  border-0 ">
          USE BALANCE
        </button>
        <button className="use-balance-btn px-4 py-2 ms-1  border-0 ">
          $1000
        </button>
        <button className="use-balance-btn px-4 py-2 ms-1  border-0 ">
          $100
        </button>
      </div>
      <span>~ $20.82</span>
    </div>
  );
};

export default UseBalance;
