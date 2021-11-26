import React, { useRef, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Header from "./components/Header/Header.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";
import Player from "./components/Player/Player.jsx";
import Playlist from "./Playlist.jsx";
import Home from "./components/Home/Home.jsx";

function App() {
  const { pathname } = useLocation();
  const appRef = useRef();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
  return (
    <div className="App" ref={appRef}>
      {/* Header */}
      {/* fin Header */}

      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="search" element={<SearchPage />} />
        <Route path="player" element={<Player />} />
        <Route path="favorites" element={<Playlist />} />
      </Routes>
      {/* Contenu */}
      {/* Fin Contenu */}
      {/* Footer */}

      {/* Footer */}
    </div>
  );
}

export default App;
