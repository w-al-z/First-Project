import React from "react";
import "./Dashboard.css";
import image from "../Assets/Images/profile.jpg";
import images from "../Assets/Images/avatar.png";
import imagess from "../Assets/Images/avatars.png";

export default function Dashboard() {
  return (
    <div className="image">
      <div>
        <div className="imgs">
          <img id="profile_img" src={image} />
        </div>
        <div className="twit">
          <a id="twitter" href="https://twitter.com/AwwalAb58506885">
            W-a-l-Z
          </a>
        </div>
      </div>

      <img className="profile_img3" src={imagess} />
      <img className="profile_img2" src={images} />
    </div>
  );
}
