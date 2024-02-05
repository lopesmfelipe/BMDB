import React from "react";
import Header from "./components/Header";
import MangaGrid from "./components/MangaGrid";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Manga from "./pages/MangaPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <MangaGrid />
              </>
            }
          />

          <Route path="/manga" element={<Manga />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
