import React from "react";
import NavBar from "./NavBar";
import Error from "../Images/Error.gif";

const PageNotFound = () => {
  return (
    <>
      <NavBar />
      <hr />
      <img src={Error} alt="404-Error" className="m-auto" />
    </>
  );
};

export default PageNotFound;
