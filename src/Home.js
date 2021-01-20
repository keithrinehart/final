import React from "react";
import Face from "./img/face.jpg";
import Hamburger from "./Hamburger";

function Home() {
  return (
    <header className="App-header">
      <h1>ART GALLERY HOME PAGE</h1>
      <img className="face-img" src={Face} alt="painted face" />
      <div className="shadow"></div>
      <Hamburger />
    </header>
  );
}

export default Home;
