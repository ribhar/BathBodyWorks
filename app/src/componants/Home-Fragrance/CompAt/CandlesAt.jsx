import React from "react";
import { allCandles } from "../../../API/Data";
import AllProAt from "./AllProAt";
const CandlesAt = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "16% 82%",
        gap: "2%",
        margin: "20px",
      }}
    >
      <div></div>
      <div>
        <div>
          <AllProAt data={allCandles} />
        </div>
      </div>
    </div>
  );
};

export default CandlesAt;
