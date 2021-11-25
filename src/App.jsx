import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Player from "./components/Player/Player.jsx";
import Favori from "./components/Playlist/Playlist.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}

      {/* fin Header */}
      <Favori />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Header} />
          <Route path="page/" element={Footer} />
        </Routes>
      </BrowserRouter>

      {/* Contenu */}
      <Player />

      {/* Fin Contenu */}

      {/* Footer */}

      {/* Footer */}
    </div>
  );
}

export default App;
