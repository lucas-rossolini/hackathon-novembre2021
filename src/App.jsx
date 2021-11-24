import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/Header.jsx";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <h1>Le Delirium</h1>

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
