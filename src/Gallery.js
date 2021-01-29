import React, { useState } from 'react';
import Title from './NewGallery/comps/Title';
import UploadForm from './NewGallery/comps/UploadForm';
import ImageGrid from './NewGallery/comps/ImageGrid';
import Modal from './NewGallery/comps/Modal';
import Hamburger from "./components/Hamburger";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="Gallery">
      <Hamburger />
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;