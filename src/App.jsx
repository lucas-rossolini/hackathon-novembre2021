import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import Favori from "./Playlist.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}

      {/* fin Header */}
      <BrowserRouter>
        <Favori />
        <Routes>
          <Route path="/" element={Header} />
          <Route path="page/" element={Footer} />
        </Routes>
      </BrowserRouter>

      {/* Contenu */}

      {/* Fin Contenu */}

      {/* Footer */}

      {/* Footer */}
    </div>
  );
}

export default App;
