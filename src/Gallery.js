import React from "react";
import { useParams } from "react-router-dom";

function Gallery() {
  const { userId } = useParams()

  console.log(userId);

  return (
    <>
    <div className="gall-body">
      <h1 className="gall-h1">Gallery</h1>
    </div>
    </>
  );
}

export default Gallery;