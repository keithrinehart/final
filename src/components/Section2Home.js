import React, { useRef } from "react";
import { useIntersection } from "react-use";
import "../css/section2home.css";
import Img1 from "../img/img1.jpg";
import { Link } from "react-router-dom";
import gsap from "gsap";

function Section2Home() {
  // Ref for our element
  const sectionRef = useRef(null);
  // All the ref to be observed
  const intersection = useIntersection(sectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 0.9,
  });

  // Animation for fading in
  const fadeIn = (element) => {
    gsap.to(element, 1, {
      opacity: 1,
      y: -60,
      ease: "power4.out",
      stagger: {
        amount: 0.3,
      },
    });
  };

  // Animation for fading out
  const fadeOut = (element) => {
    gsap.to(element, 1, {
      opacity: 0,
      y: -20,
      ease: "power4.out",
    });
  };

  intersection && intersection.intersectionRatio < 0.9
    ? fadeOut(".fadeIn")
    : fadeIn(".fadeIn");
  return (
    <div ref={sectionRef} className="section2home-container sectionone">
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
