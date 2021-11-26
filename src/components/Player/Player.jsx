import React, { useState, useRef, useEffect } from "react";
import Wave from "@foobar404/wave";
import Controls from "./Controls.jsx";
import Details from "./Details.jsx";
import titles from "../../Data/data";
// import ToggleButton from "../ToggleButton/ToggleButton.jsx";
import "./Player.css";
import Lyrics from "../Modal/Modal.jsx";

function Player() {
  const [songs] = useState(titles);

  const audioEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(0);
  // const [deaf, setDeaf] = useState(false);

  // const triggerToggle = () => {
  //   setDeaf(!deaf);
  // };

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
      vibrate(songs[currentSongIndex].vibrate);
    } else {
      audioEl.current.pause();
      finishVibrate.forEach((vibration) => {
        clearTimeout(vibration);
      });
      setFinishVibrate([]);
    }
  }, [isPlaying]);

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
  const wave = new Wave();
  const options = {
    stroke: 2,
    type: "flower",
    colors: ["#19CFFC", "#FFE694", "#098DFE", "#9545DD"],
  };
  wave.fromElement("audio-element_id", "canvas_id", options);

  return (
    <div className="c-player">
      {/* <ToggleButton
        className="mt-2"
        triggerToggle={triggerToggle}
        deaf={deaf}
      /> */}
      {isPlaying && <canvas id="canvas_id" height="351" width="300"></canvas>}
      <audio
        id="audio-element_id"
        src={songs[currentSongIndex].src}
        ref={audioEl}
      ></audio>

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
      <Lyrics data={titles} currentSongIndex={currentSongIndex} />
    </div>
  );
}

export default Player;
