import React, { useState, useRef, useEffect } from "react";
import Controls from "./Controls.jsx";
import Details from "./Details.jsx";
import titles from "../../Data/data";
import ToggleButton from "../ToggleButton/ToggleButton.jsx";

import "./Player.css";
import Visualizer from "../Visualizer.jsx";

function Player() {
  const [songs] = useState(titles);

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  const [deaf, setDeaf] = useState(false);

  const triggerToggle = () => {
    setDeaf(!deaf);
  };

  console.log(deaf);

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

  //   ref={audioEl}
  return (
    <div className="c-player">
      <audio src={songs[currentSongIndex].src} ref={audioEl}></audio>
      <h4>Playing now</h4>
      <ToggleButton triggerToggle={triggerToggle} deaf={deaf} />
      <Details song={songs[currentSongIndex]} />
      {isPlaying && <Visualizer song={songs[currentSongIndex]} ref={audioEl} />}
      <Details song={songs[currentSongIndex]} isPlaying={isPlaying} />

      <Controls
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        SkipSong={SkipSong}
        currentSongIndex={currentSongIndex}
        data={titles}
      />
      <p>
        Next up :{" "}
        <span>
          {songs[nextSongIndex].title} by {songs[nextSongIndex].name}
        </span>
      </p>
    </div>
  );
}

export default Player;
