import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Pages/Home";
import Travel from "./Pages/Travel";
import { Discover } from "./Pages/Discover";
import { About } from "./Pages/About";
import Mercury from "./Planets/Mercury";
import Venus from "./Planets/Venus";
import Jupiter from "./Planets/Jupiter";
import Mars from "./Planets/Mars";
import Saturn from "./Planets/Saturn";
import Uranus from "./Planets/Uranus";
import Neptun from "./Planets/Neptun";
import Sun from "./Planets/Sun";
import Moon from "./Planets/Moon";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Travel" element={<Travel />} />
        <Route path="/Discover" element={<Discover />} />
        <Route path="/AboutUs" element={<About />} />
        <Route path="/earth" element={<Venus />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/mars" element={<Mars />} />
        <Route path="/saturn" element={<Saturn />} />
        <Route path="/mercury" element={<Mercury />} />
        <Route path="/jupiter" element={<Jupiter />} />
        <Route path="/uranus" element={<Uranus />} />
        <Route path="/neptun" element={<Neptun />} />
        <Route path="/moon" element={<Moon />} />
        <Route path="/sun" element={<Sun />} />
      </Routes>
    </div>
  );
}

export default App;
