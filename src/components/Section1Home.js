import React from "react";
import "../css/section1home.css";
import Img10 from "../img/img-10.jpg";
import Imgvtroop from "../img/vtrooper.jpg";
import Img6 from "../img/img-6.jpg";
import Img16 from "../img/img-16.jpg";
import ArtistExp from "../img/artist-example.jpg";

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
      <div className="sec1finalbkg"></div>
      <div className="monthlyartist-container">
        <p className="monthly-artist-p">
          <span className="monthly-artist-p-span">O</span>
          <span className="monthly-artist-p-2ndword-1">UR</span>{" "}
          <span className="monthly-artist-p-span2">M</span>
          <span className="monthly-artist-p-span3">ONTHLY</span>
        </p>
        <p className="monthly-artist-p2">
          <span className="monthly-artist-p-span4">A</span>rTiST{" "}
          <span className="monthly-artist-p-span5">I</span>
          <span className="monthly-artist-p-span6">S</span>
        </p>
        <div className="monthly-artist-name"></div>
        <div className="monthly-artist-section">
          <div className="artist-sec-line1"></div>
          <div className="artist-sec-line2"></div>
          <div className="artist-sec-line3"></div>
          <img
            className="artist-img"
            src={ArtistExp}
            alt="artist"
            width="200px"
          ></img>
        </div>
        <p className="artist-congrats-p">CONgrATS</p>
      </div>
    </div>
  );
}

export default Section1Home;
