import React from "react";
import { Link } from "react-router-dom";
import "../css/footer.css";
import Fface from "../img/face.jpg";

function Footer() {
  return (
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
  );
}

export default Footer;
