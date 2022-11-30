import "./App.css";
import TopNavbar from "./Components/TopNavbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TvShows from "./Components/TvShows";
import Details from "./Components/Details";

function App() {
  return (
    <>
      <BrowserRouter>
        <TopNavbar />
        <Routes>
          <Route element={<Home />} path="/home" />
          <Route element={<TvShows />} path="/tvshows" />
          <Route element={<Details />} path="/details/:movieID" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
