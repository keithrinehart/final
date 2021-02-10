import React from "react";
import "../css/section1home.css";
import Img10 from "../img/img-10.jpg";
import Imgvtroop from "../img/vtrooper.jpg";
import Img6 from "../img/img-6.jpg";
import Img16 from "../img/img-16.jpg";

function Section1Home() {
  return (
    <div className="section-one-container">
      <div className="section1home-bkg">
        <div className="img-cover-left">
          <h1 className="section-one-h1-hover">a</h1>
          <h1 className="section-one-h1-hover1">hOME</h1>
          <h1 className="section-one-h1-hover-half">FOr</h1>
          <h1 className="section-one-h1-hover2">
            <span className="section-one-span2">I</span>NSPERaTION
          </h1>
          <div className="img-cover-right"></div>
        </div>
      </div>
      <img
        className="section1-home-img-hover"
        src={Img10}
        alt="painted face of a woman"
        width="200px"
        height="200px"
      ></img>
      <img
        className="section1-home-img-hover2"
        src={Imgvtroop}
        alt="painted face of a woman"
        width="200px"
        height="200px"
      ></img>
      <img
        className="section1-home-img-hover3"
        src={Img6}
        alt="painted face of a woman"
        width="200px"
        height="200px"
      ></img>
      <img
        className="section1-home-img-hover4"
        src={Img16}
        alt="painted face of a woman"
        width="200px"
        height="200px"
      ></img>
    </div>
  );
}

export default Section1Home;
