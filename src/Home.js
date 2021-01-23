import React from "react";
import Face from "./img/face.jpg";
import Hamburger from "./components/Hamburger";
import Section2Home from "./components/Section2Home";

function Home() {
  return (
    <header className="App-header">
      <Hamburger />
      <div className="header-container">
        <h1 id="homeh1">
          Artsy<span className="span-homeh1">Ish</span>
        </h1>
        <div className="home-display-row">
          <div className="p-line"></div>
          <p className="home-p1">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum invidunt ut labore et
          </p>
          <div className="p-line2"></div>
          <img className="face-img" src={Face}></img>
        </div>
      </div>
      <Section2Home />
    </header>
  );
}

export default Home;
