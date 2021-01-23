import React, { useEffect } from "react";
import "../css/section2home.css";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import Img1 from "../img/img1.jpg";

function Section2Home() {
  useEffect(() => {
    Aos.init({ offset: 1000, duration: 2000 });
  }, []);
  return (
    <div className="section2home-container">
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

export default Section2Home;
