import React from "react";
import NavBar from "./NavBar";
import Error from "../Images/Error.gif";

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <hr />
      <img src={Error} alt="404-Error" className="m-auto h-[500px] mt-[20px]" />
    </>
  );
};

export default PageNotFound;
