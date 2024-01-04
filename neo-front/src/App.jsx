import Header from "./components/Header";
import MangaGrid from "./components/MangaGrid";
import Navbar from "./components/Navbar";
import Update from "./pages/Update";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

          <Route
            path="/updates"
            element={
              <Update />
            }
          />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
