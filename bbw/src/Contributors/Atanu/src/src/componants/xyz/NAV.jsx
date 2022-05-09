import React from "react";

import { Link } from "react-router-dom";

const NAV = () => {
  return (
    <div className="flex gap-[50px]" style={{fontWeight:"bold",justifyContent:"center"}}>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/fragrance">fragrance</Link>
    </div>
  );
};

export default NAV;
