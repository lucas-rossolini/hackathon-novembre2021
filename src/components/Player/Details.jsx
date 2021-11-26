import React from "react";
import { motion } from "framer-motion";

function Details(props) {
  return (
    <div className="c-player--details">
      <div className="details-img">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          {!props.isPlaying && <img src={props.song.image} alt="" />}
        </motion.div>
      </div>

      <h3 className="details-title">{props.song.title}</h3>
      <h4 className="details-artist">{props.song.name}</h4>
    </div>
  );
}

export default Details;
