import React from "react";
import Cell from "../img/cell2.png";
import { Link } from "react-router-dom";
import "../css/section3home.css";

function Section3Home() {
  return (
    <div className="section-3-container">
      <div className="sec-3-inner-container">
        <h3 id="section-3-h3">
          Upload &bull; Share &bull; Inspire &bull; Create &bull; Repeat
        </h3>
        <div className="cell-hover">
          <img
            className="section-3-img"
            src={Cell}
            alt="laptop with a tablet and cellphone"
          ></img>
          <div className="cell-line"></div>
          <Link to="/gallery">
            <h3 className="section-3-link">Find out how</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3Home;
