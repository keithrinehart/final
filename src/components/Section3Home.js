import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cell from "../img/cell2.png";
import { Link } from "react-router-dom";
import "../css/section3home.scss";
import gsap from "gsap";

function Section3Home() {
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    gsap.fromTo(
      element.querySelector(".sec-3-inner-container"),
      {
        opacity: 0,
        y: -20,
      },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: element.querySelector(".sec-3-inner-container"),
          start: "top top",
          end: "bottom center",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <div className="section-3-container">
      <div ref={ref} className="sec-3-inner-container">
        <div className="sec3-line1"></div>
        <div className="sec3-line2"></div>
        <div className="sec3-line3"></div>
        <div className="section-3-redlineOne"></div>
        <h3 id="section-3-h3">
          Upload <span className="section-three-points">&bull;</span> Share{" "}
          <span className="section-three-points">&bull;</span> Inspire{" "}
          <span className="section-three-points">&bull;</span> Create{" "}
          <span className="section-three-points">&bull;</span> Repeat
        </h3>
        <div className="cell-hover">
          <img
            className="section-3-img"
            src={Cell}
            alt="laptop with a tablet and cellphone"
          ></img>
          <div className="cell-line"></div>
          <div className="cell-line2"></div>
          <Link to="/newgallery">
            <h3 className="section-3-link">Find out how</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Section3Home;
