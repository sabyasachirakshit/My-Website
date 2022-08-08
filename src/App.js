import HomeBody from "./components/HomeBody";
import { HashRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="https://sabyasachirakshit.github.io/"
            element={<HomeBody />}
          />
          <Route path="/" element={<HomeBody />} />
          <Route
            path="https://sabyasachirakshit.github.io/about"
            element={<About />}
          />
          <Route
            path="https://sabyasachirakshit.github.io/project"
            element={<Project />}
          />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
