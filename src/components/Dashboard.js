import React from "react";
import "./Dashboard.css";
import image from "../Assets/Images/profile.jpg";

export default function Dashboard() {
  return (
    <div className="image">
      <div>
        <img id="profile_img" src={image} />
        <div className="twit">
          <a id="twitter" href="https://twitter.com/AwwalAb58506885">
            W-a-l-Z
          </a>
        </div>
      </div>
    </div>
  );
}
