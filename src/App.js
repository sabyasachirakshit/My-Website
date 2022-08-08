import HomeBody from "./components/HomeBody";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/My-Website" element={<HomeBody />} />
          <Route path="/My-Website/about" element={<About />} />
          <Route path="/My-Website/project" element={<Project />} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
