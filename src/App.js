import HomeBody from "./components/HomeBody";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeBody />} />
          <Route
            path="/"
            element={<HomeBody />}
          />
          <Route
            path="/about"
            element={<About />}
          />
          <Route
            path="/project"
            element={<Project />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
