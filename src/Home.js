import React, { useEffect, useRef } from "react";
import { TweenMax, Power3 } from "gsap";
import gsap from "gsap";
import Face from "./img/face.jpg";
import Hamburger from "./components/Hamburger";
import Section1Home from "./components/Section1Home";
import Section2Home from "./components/Section2Home";
import Section3Home from "./components/Section3Home";
import HomeImg1 from "./img/img-1.jpg";
import HomeImg4 from "./img/img-4.jpg";

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
            <div className="home-redlineOne"></div>
          </div>
        </div>

        {/*________IMG-HOVER-SECTION__________----------------------*/}
        <div className="landing-hover-sec1">
          <div className="img-cover1"></div>
          <img
            className="home-hover-img1"
            src={HomeImg1}
            alt=""
            width="250px"
          ></img>
          <div className="home-sec1-redline1"></div>
          <div className="home-sec1-redline2"></div>
          <div className="home-sec1-redline3"></div>
          <h2 className="home-hover-h2-1">
            I<span className="home-hover-h2-1-span1">t</span>
            <span className="home-hover-h2-1-span3">S</span>
            <span className="home-hover-h2-1-span2">tArts</span>
          </h2>
          <div className="home-h2-cover1"></div>
          <h2 className="home-hover-h2-2">With</h2>
          <div className="home-h2-cover2"></div>
          <h2 className="home-hover-h2-3">
            A<span className="home-h2-3-span">n</span>
          </h2>
          <div className="home-h2-cover3"></div>
          <h2 className="home-hover-h2-4">
            I<span className="home-h2-3-span2">deA</span>
          </h2>

          {/*****************IMG-HOVER-SECTION-2********************/}
        </div>
        <div className="landing-hover-sec2">
          <div className="img-cover2"></div>
          <img
            className="home-hover-img2"
            src={HomeImg4}
            alt=""
            width="250px"
          ></img>
          <div className="home-sec2-redline1"></div>
          <div className="home-sec2-redline2"></div>
          <div className="home-sec2-redline3"></div>
          <div className="home-hover-h2-sec2-cover"></div>
          <h2 className="home-hover2-h2-1">
            <span className="home-hover2-h2-1-span">WITH</span>
          </h2>
          <h2 className="home-hover2-h2-2">YOU</h2>
        </div>
        <div className="landing-hover-sec3"></div>
      </div>

      {/*----------COMPONENTS-SECTION------------*/}
      <Hamburger />
      <Section1Home />
      <Section2Home />
      <Section3Home />
    </header>
  );
}

export default Home;
