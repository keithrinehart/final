import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import Face from "./img/face.jpg";
import Hamburger from "./components/Hamburger";
import Section1Home from "./components/Section1Home";
import Section2Home from "./components/Section2Home";

function Home() {
  let headingh1 = useRef(null);
  let headingp = useRef(null);
  let headingimg = useRef(null);
  let headingBottomLine = useRef(null);

  useEffect(() => {
    TweenMax.from(headingh1, 1.5, {
      opacity: 0,
      x: 100,
      ease: Power3.easeOut,
      delay: 1,
    });
    TweenMax.from(headingp, 1.5, {
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
      delay: 1.5,
    });
    TweenMax.from(headingimg, 1.5, {
      opacity: 0,
      x: 100,
      ease: Power3.easeOut,
      delay: 1.8,
    });
    TweenMax.from(headingBottomLine, 1.8, {
      opacity: 0,
      y: 100,
      ease: Power3.easeOut,
      delay: 2.5,
    });
  }, []);

  return (
    <header className="App-header">
      <div className="header-container">
        <div className="inner-head-container">
          <h1 ref={(el) => (headingh1 = el)} id="homeh1">
            Artsy<span className="span-homeh1">Ish</span>
          </h1>
          <div className="home-display-row">
            <div className="p-line"></div>
            <p ref={(el) => (headingp = el)} className="home-p1">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua. At vero eos et accusam et justo duo
              dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum invidunt ut
              labore et
            </p>
            <div
              ref={(el) => (headingBottomLine = el)}
              className="p-line2"
            ></div>
            <img
              ref={(el) => (headingimg = el)}
              className="face-img"
              src={Face}
              alt="graffiti painted face"
            ></img>
          </div>
        </div>
      </div>
      <Hamburger />
      <Section1Home />
      <Section2Home />
    </header>
  );
}

export default Home;
