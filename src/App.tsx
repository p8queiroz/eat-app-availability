import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './pages/home';
import Reservation from './pages/Reservation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        eat app
      </header>
      <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/reservation">Reservation</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/reservation">
            <Reservation />
          </Route>
        </Switch>
      </div>
    </Router>




    </div>
  );
}

export default App;
