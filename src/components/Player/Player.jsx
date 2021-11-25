import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls.jsx";
import Details from "./Details.jsx";
import titles from "../../Data/data";

import "./Player.css";
import Visualizer from "../Visualizer.jsx";

function Player() {
  const [songs] = useState(titles);

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      }
      return currentSongIndex + 1;
    });
  }, [currentSongIndex]);

  useEffect(() => {
    if (isPlaying) {
      audioEl.current.play();
    } else {
      audioEl.current.pause();
    }
  });

  console.log(songs[currentSongIndex].src);

  const SkipSong = (forwards = true) => {
    if (forwards) {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp += 1;

        if (temp > songs.length - 1) {
          temp = 0;
        }

        return temp;
      });
    } else {
      setCurrentSongIndex(() => {
        let temp = currentSongIndex;
        temp -= 1;

        if (temp < 0) {
          temp = songs.length - 1;
        }

        return temp;
      });
    }
  };
  console.log(currentSongIndex);

  //   ref={audioEl}
  return (
    <div className="c-player">
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      {isPlaying && <Visualizer song={songs[currentSongIndex]} ref={audioEl} />}
      <h4>Playing now</h4>
      <Details song={songs[currentSongIndex]} />
      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
      />
      <p>
        Next up:
        <span>
          {songs[nextSongIndex].title} by {songs[nextSongIndex].name}
        </span>
      </p>
    </div>
  );
}

export default Player;
