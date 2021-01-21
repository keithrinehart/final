import React from "react";
import "../css/floatingimg.css";
import { Link } from "react-router-dom";
import Img1 from "../img/img1.jpg";

function FloatingImg() {
  return (
    <div>
      <div className="flex">
        <img className="img1" src={Img1} alt="Womans painted face"></img>
        <div className="float-col">
          <h3 className="home-h3">Blah Blah Blah</h3>
          <p className="float-p">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat,
          </p>
          <ul className="float-ul-about">
            <Link to="/about">
              <li className="float-li-about">Learn more about us</li>
              <div className="float-line"></div>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FloatingImg;
