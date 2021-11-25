/* eslint-disable prefer-destructuring */
import React from "react";
import Playlists from "../../Data/VibratingPlaylist";

function Vibrate() {
  const aventurier = Playlists.aventurier;
  const wewill = Playlists.wewill;
  const muse = Playlists.muse;
  const smooth = Playlists.SmoothCriminal;
  const blue = Playlists.blue;

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
    <div>
      <button type="button" onClick={() => vibrate(aventurier)}>
        Vibrate
      </button>
    </div>
  );
}

export default Vibrate;
