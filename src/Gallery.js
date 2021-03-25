import React, { useEffect, useState } from "react";
import Modal from "./NewGallery/comps/Modal";
import { motion } from "framer-motion"; //framer.com/motion/

import { useParams } from "react-router-dom";
import { projectFirestore } from "./firebaseConfig";

function Gallery() {
  const { userId } = useParams();
  const [docs, setDocs] = useState([]);
  const [selectedImg, setSelectedImg] = useState(null);

  useEffect(() => {
    // const unsub = projectFirestore.collection("images")
    //   .where("author", "==", userId)
    //   .orderBy('createdAt', 'desc')
    //   .onSnapshot(snap => {
    //     console.log(snap)
    //     let documents = [];
    //     snap.forEach(doc => {
    //       documents.push({...doc.data(), id: doc.id});
    //     });
    //     setDocs(documents);
    //   });

    const unsub = projectFirestore
      .collection("users")
      .doc(userId)
      .collection("Gallery")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
  }, []);

  return (
    <>
      <div className="gall-body">
        <div className="gall-body-header">
          <h1 className="gall-h1">Gallery</h1>
        </div>
        <div className="img-grid">
          {docs &&
            docs.map((doc) => (
              <motion.div
                className="img-wrap"
                key={doc.id}
                layout
                whileHover={{ opacity: 0.5 }}
                s
                className="img-onclick"
                onClick={() => setSelectedImg(doc.url)}
              >
                <motion.img
                  src={doc.url}
                  alt="uploaded pic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="grid-image"
                />
              </motion.div>
            ))}
        </div>
        {selectedImg && (
          <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
        )}
      </div>
    </>
  );
}

export default Gallery;
