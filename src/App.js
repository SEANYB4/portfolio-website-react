import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
    Routes
} from "react-router-dom";
import Logo from "./Images/portfolio_test.jpg"
function App() {
  return (
    <Router>

  
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
            </ul>
          </nav>
        </header>


        <img src={Logo}></img>
        <Routes>
          <Route exact path="/"></Route>
          <Route exact path="/Home"></Route>
          <Route exact path="/Projects"></Route>
          <Route exact path="/About"></Route>
        </Routes>




      </div>


    </Router>
  );
}

export default App;
