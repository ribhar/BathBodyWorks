import React from "react";
// import { allCandles } from "../../../API/Data";
import ProItemAt from "./ProItemAt";

const AllProAt = ({ data }) => {
  return (
    <div className="grid grid-cols-4 gap-[50px]">
      {data.map((el) => {
        return <ProItemAt key={el.id} {...el} />;
      })}
    </div>
  );
};

export default AllProAt;
