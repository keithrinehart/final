import React from "react";
import Face from "./img/face.jpg";
import Hamburger from "./components/Hamburger";
import FloatingImg from "./components/FloatingImg";
import RedLines from "./components/RedLines";

function Home() {
  return (
    <header className="App-header">
      <Hamburger />
      <RedLines />
      <h1 id="homeh1">
        Artsy<span className="span-homeh1">Ish</span>
      </h1>
      <p className="home-p1">
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
        clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
        amet. Lorem ipsum invidunt ut labore et.
      </p>
      <FloatingImg />
      <img className="face-img" src={Face} alt="painted face" />
      <div className="shadow"></div>
    </header>
  );
}

export default Home;
