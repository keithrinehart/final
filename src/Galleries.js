import React from "react";
import Hamburger from "./components/Hamburger";
import "./css/galleries.scss";

function Galleries() {
  
  return (
    <>
    {/*<div><Galleries /></div>*/}
    <div className="gall-body">
      <Hamburger />
      <h1 className="gall-h1">Galleries</h1>
    </div>
    </>
  );
}

export default Galleries;