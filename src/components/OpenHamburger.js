import React from "react";
import { Link } from "react-router-dom";
import "../css/openhamburger.css";

function OpenHamburger() {
  return (
    <div className="openham-container">
      <ul>
        <Link to="/">
          <li className="ham-li">Home</li>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/gallery">
          <li className="ham-li">Galleries</li>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/about">
          <li className="ham-li">About</li>
          <p className="ham-line">_</p>
        </Link>
        <Link to="/contact">
          <li className="ham-li">Contact</li>
          <p className="ham-line">_</p>
        </Link>
      </ul>
    </div>
  );
}

export default OpenHamburger;
