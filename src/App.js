import './App.css';

import MenuButton from './Components/Menu_Button.js';
import Home from "./Components/Home";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Music from "./Components/Music";
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
            <MenuButton title="Home" link="/"></MenuButton>
            <MenuButton title="Projects" link="/projects"></MenuButton>
            <MenuButton title="About / Contact" link="/about"></MenuButton>
            <MenuButton title="Music" link="/music"></MenuButton>
          </nav>
        </header>
        

        <Routes>
          <Route path="*" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/about" element={<About/>}></Route>
          <Route path="/music" element={<Music/>}></Route>
        </Routes>

      </div>
      
    </Router>
  );
}

export default App;
