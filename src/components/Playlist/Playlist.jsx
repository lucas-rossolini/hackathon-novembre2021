import React from "react";
import Img from "./img.jpg";
import "./Playlist.css";

function Favori() {
  return (
    <div>
      <h1>Playlist</h1>
      <div className="cartes-favori">
        <img className="image-favori" src={Img} alt="" />
        <div className="description-favori">
          <p className="titre-favori">cocou</p>
          <p className="artiste-favori">descriptdfgdfgdfgdfgif</p>
        </div>
      </div>
    </div>
  );
}

export default Favori;
