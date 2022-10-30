import React from "react";
import "./Body.css";
import Image from "../Assets/Images/Icon.png";
import image from "../Assets/Images/slack.png";
const Body = () => {
  return (
    <div className="list">
      <div className="container">
        <div>
          <a href="https://twitter.com/AwwalAb58506885">
            <button id="btn-twitter">Twitter Link</button>
          </a>
        </div>
        <div>
          <a href="https://training.zuri.team/">
            <button id="btn-zuri">Zuri Team</button>
          </a>
        </div>
        <div>
          <a href="http://books.zuri.team">
            <button id="books">Zuri Books</button>
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team">
            <button id="books-python">Python Books</button>
          </a>
        </div>
        <div>
          <a href=" https://background.zuri.team">
            <button id="pitch">Background Check For Coders</button>
          </a>
        </div>
        <div>
          <a href="https://books.zuri.team/design-rules">
            <button id="books-design">Design books</button>
          </a>
        </div>

        <div className="slack">
          <div>
            <a href="https://app.slack.com/client/T042F7V19Q8/C041V6WKAUS">
              <img src={image} />
            </a>
          </div>

          <div>
            <a href="https://github.com/w-al-z/First-Project">
              <img src={Image} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
