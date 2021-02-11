import React from "react";
import useFirestore from "../hooks/useFirestore";
import { motion } from "framer-motion"; //framer.com/motion/
import "../css/imagegrid.scss";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("images");

  return (
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
  );
};

export default ImageGrid;
