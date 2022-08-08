import HomeBody from "./components/HomeBody";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/My-Website" element={<HomeBody />} />
          <Route path="/My-Website/about" element={<About />} />
          <Route path="/My-Website/project" element={<Project />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
