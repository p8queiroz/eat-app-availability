import React, { Dispatch, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Restaurant from './pages/Restaurant';
import Reservation from './pages/Reservation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReservationState } from './store/type';
import { IReservation } from './models/IReservation';
import { addReservation } from './store/actions/actions.reservation';
//import useEffectAsync from './utils';
import { loadRestautantData } from './store/actions/actions.restaurant';

const App: React.FC = () => {
  
  const reservations: readonly IReservation[] = useSelector(
    (state: ReservationState) => state.reservation,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();


  useEffect(() => {
    const fetchData = async () => loadRestautantData(dispatch);
    fetchData();
  }, [dispatch]); 

  const saveReservation = React.useCallback(
    (reservation: IReservation) => dispatch(addReservation(reservation)),
    [dispatch]
  );

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
              <Restaurant saveReservation={saveReservation}/>
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
