import { BrowserRouter, Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Player from "./components/Player/Player.jsx";
import Playlist from "./Playlist.jsx";
import Visualizer from "./components/Visualizer.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <Header />
      {/* fin Header */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Header} />
          <Route path="page/" element={Footer} />
        </Routes>
      </BrowserRouter>

      {/* Contenu */}
      <Visualizer />
      <Player />
      <Playlist />
      {/* Fin Contenu */}
      {/* Footer */}

      {/* Footer */}
    </div>
  );
}

export default App;
