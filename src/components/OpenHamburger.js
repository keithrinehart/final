import React from "react";
import { Link } from "react-router-dom";
import "../css/openhamburger.scss";

function OpenHamburger() {
  return (
    <div className="openham-container">
      <ul>
        <Link to="/">
          <li className="ham-li">Home</li>
          <div className="home-box"></div>
          <p className="ham-line ham-line-1">_</p>
        </Link>
        <Link to="/galleries">
          <li className="ham-li">Galleries</li>
          <div className="gall-box"></div>
          <p className="ham-line ham-line-2">_</p>
        </Link>
        <Link to="/newgallery">
          <li className="ham-li create-gal">Create</li>
          <div className="create-gall-box"></div>
          <p className="ham-line ham-line-3">_</p>
        </Link>


        {/*<Link to="/register">
          <li className="ham-li">Register</li>
          <div className="gall-box-2"></div>
          <p className="ham-line"></p>
        </Link>
        
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
