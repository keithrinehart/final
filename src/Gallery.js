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
      <Title/>
      <UploadForm />
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
      <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
      <Hamburger />
    </div>
  );
}

export default Gallery;