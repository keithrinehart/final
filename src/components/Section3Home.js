import React, { useRef, useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Cell from "../img/cell2.png";
import { Link } from "react-router-dom";
import "../css/section3home.css";
import "../css/footer.css";
import Fface from "../img/face.jpg";
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
          <Link to="/about">
            <h3 className="section-3-link">Find out how</h3>
          </Link>
        </div>
      </div>
      <div className="footer-wrap">
        <div className="footer-h4-flex">
          <h4 className="footer-h4">Artsy</h4>
          <h4 className="footer-h4-2">Ish</h4>
          <img
            className="footer-img"
            src={Fface}
            alt="Painted logo face"
            width="70px"
          ></img>
        </div>
        <div className="footer-copyrights">
          <p className="footer-p-copyrights">&copy; 2021</p>
        </div>
        <div className="footer-flex">
          <div className="link-div-hover">
            <Link className="footer-link">Privacy Policy</Link>
            <div className="footer-line-hover-cover">
              <div className="footer-line-hover"></div>
            </div>
          </div>
          {/*END OF FIRST LINK HOVER*/}
          <p className="footer-p">|</p>
          <div className="link-div-hover2">
            <Link className="footer-link2">Terms of Use</Link>
            <div className="footer-line-hover-cover2">
              <div className="footer-line-hover2"></div>
            </div>
          </div>
          {/*END OF 2nd LINK HOVER*/}
          <p className="footer-p">|</p>
          <div className="link-div-hover3">
            <Link className="footer-link3">Contact Us</Link>
            <div className="footer-line-hover-cover3">
              <div className="footer-line-hover3"></div>
            </div>
          </div>
          {/*END OF 3rd LINK HOVER*/}
          <p className="footer-p">|</p>
          <div className="link-div-hover4">
            <Link className="footer-link4">Help</Link>
            <div className="footer-line-hover-cover4">
              <div className="footer-line-hover4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3Home;
