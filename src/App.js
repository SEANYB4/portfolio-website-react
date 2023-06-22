import './App.css';

import MenuButton from './Components/Menu_Button.js';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import {
  BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

function App() {
  return (
    <Router>

      <div className="App">
        <header className="App-header">
          <nav className='nav'>
            <MenuButton title="Home" description="Countdown Game" link="/"></MenuButton>
            <MenuButton title="Projects" description="Warriors of Xu Game" link="/projects"></MenuButton>
            <MenuButton title="About" description="Gazetteer App" link="/about"></MenuButton>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About/>}></Route>
        </Routes>

      </div>
    </Router>
  );
}

export default App;
