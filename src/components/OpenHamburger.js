import React from "react";
import { Link } from "react-router-dom";
import "../css/openhamburger.css";

function OpenHamburger() {
  return (
    <div className="openham-container">
      <ul>
        <Link to="/">
          <li className="ham-li">Home</li>
          <div className="home-box"></div>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/galleries">
          <li className="ham-li">Galleries</li>
          <div className="gall-box"></div>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/newgallery">
          <li className="ham-li create-gal">Create Gallery</li>
          <div className="create-gall-box"></div>
          <p className="ham-line">_</p>
        </Link>
        {/*
        <Link to="/about">
          <li className="ham-li">About</li>
          <div className="about-box"></div>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/contact">
          <li className="ham-li">Contact</li>
          <div className="contact-box"></div>
          <p className="ham-line">_</p>
        </Link>
*/}
      </ul>
    </div>
  );
}

export default OpenHamburger;
