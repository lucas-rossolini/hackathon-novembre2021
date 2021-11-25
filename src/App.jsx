import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";
import SearchPage from "./components/SearchPage/SearchPage.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <h1>Wild Vibes</h1>

      <div>
        <SearchPage />
      </div>

      {/* fin Header */}

      <BrowserRouter>
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
