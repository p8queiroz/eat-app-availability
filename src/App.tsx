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


const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        eat app
      </header>
      <Router>
      <div>

            <Link to="/">Home</Link>
      
            <hr />
            <Link to="/reservation">Reservation</Link>
  

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
