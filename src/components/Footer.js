import React from "react";
import images from "../Assets/Images/icon2.png";
import "./footer.css";

export const Footer = () => {
  return (
    <div>
      <div className="footer">
        <h3>
          Zuri<span id="dot">.</span>Internship
        </h3>
        <p id="hng">HNG Internship 9 Frontend Task</p>
        <img id="pic" src={images} />
      </div>
    </div>
  );
};
