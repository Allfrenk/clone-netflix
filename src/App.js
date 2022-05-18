import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import MyNavbar from "./components/MyNavbar/MyNavbar.component";
import HomePage from "./pages/HomePage/HomePage";
import PaginaTV from "./pages/PaginaTV/PaginaTV.page";
import PaginaFilm from "./pages/PaginaTV/PaginaTV.page";

function App() {
  const [type, setType] = useState("");
  //
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyNavbar />}>
            <Route index element={<HomePage />} />
            <Route path="series" element={<PaginaTV type={"tv"} />} />
            <Route path="movies" element={<PaginaFilm type={"movie"} />} />
            {/* <Route path="movies" element={<HomePage type={"movie"} />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
