import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faPause,
  faForward,
  faBackward,
} from "@fortawesome/free-solid-svg-icons";

function Controls(props) {
  const vibrate = (musique) => {
    let temps = 0;
    musique.forEach((music, index) => {
      if (index === 0) {
        navigator.vibrate(music);
      }
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
      temps += music.reduce(reducer, 0);
      setTimeout(() => {
        navigator.vibrate(musique[index + 1]);
      }, temps);
    });
  };

  return (
    <div className="c-player--controls">
      <button className="skip-btn" onClick={() => props.SkipSong(false)}>
        <FontAwesomeIcon icon={faBackward} />
      </button>
      <div
        onClick={() =>
          setTimeout(() => {
            vibrate(props.data[props.currentSongIndex].vibrate);
          }, 190)
        }
      >
        <button
          className="play-btn"
          onClick={() => props.setIsPlaying(!props.isPlaying)}
        >
          <FontAwesomeIcon icon={props.isPlaying ? faPause : faPlay} />
        </button>
      </div>
      <button className="skip-btn" onClick={() => props.SkipSong()}>
        <FontAwesomeIcon icon={faForward} />
      </button>
    </div>
  );
}

export default Controls;
