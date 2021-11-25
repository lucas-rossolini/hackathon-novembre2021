import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { motion } from "framer-motion";
import "bootstrap/dist/css/bootstrap.min.css";
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

import "./App.css";
// import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";
import Player from "./components/Player/Player.jsx";
import Playlist from "./Playlist.jsx";
import Vibrate from "./components/Vibrate/Vibrate.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      {/* fin Header */}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<SearchPage />} />
          <Route path="player" element={<Player />} />
          <Route path="favorites" element={<Playlist />} />
        </Routes>
      </BrowserRouter>

      {/* Contenu */}
      <div>
        <SearchPage />
      </div>
      <Player />
      <Playlist />
      <Vibrate />
      {/* Fin Contenu */}

      {/* Footer */}

      {/* Footer */}
    </div>
  );
}

export default App;
