import React from "react";
import AnnounceBarImg from "../Images/AnnounceBarImg.PNG";
import "../CSS/LandingRes.css"

const AnnounceBar = () => {
  return (
    <div className="h-[fit-content] announceBar">
      <img src={AnnounceBarImg} alt="AnnounceBar" />
    </div>
  );
};

export default AnnounceBar;
