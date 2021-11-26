import React from "react";
import "./Playlist.css";
import titles from "./Data/data";
import Coeur from "./assets/images/heart.png";
import Lyrics from "./components/Modal/Modal.jsx";

function Playlist() {
  return (
    <div>
      <p className="titre-playlist">Playlist</p>
      {titles.map((title) => (
        <div className="favori-global">
          <div className="cartes-favori">
            <img className="coeur-favori" src={Coeur} alt="coeur" />
            <img className="image-favori" src={title.image} alt="" />
            <div className="description-favori">
              <p className="titre-favori">{title.title}</p>
              <p className="artiste-favori">{title.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Playlist;
