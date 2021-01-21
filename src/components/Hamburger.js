import React, { useState } from "react";
import OpenHamburger from "../components/OpenHamburger";
import "../css/hamburger.css";

function Hamburger() {
  const [show, setShow] = useState(false);
  return (
    <div onClick={() => setShow(!show)} className="menu-container">
      <div className="line"></div>
      <div className="line line2"></div>
      <div className="line line3"></div>
      {show ? <OpenHamburger /> : null}
    </div>
  );
}

export default Hamburger;
