import React, { Dispatch, useEffect } from 'react';
import styles from './App.module.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Restaurant from './pages/Restaurant';
import Reservation from './pages/Reservation';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { ReservationState } from './store/type';
import { IReservation } from './models/IReservation';
import { addReservation } from './store/actions/actions.reservation';
import { loadRestautantData } from './store/actions/actions.restaurant';

const App: React.FC = () => {
  
  // const reservations: IReservation = useSelector(
  //   (state: ReservationState) => state.reservation
  //   );

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
    <div className={styles.App}>
      <header className={styles.AppHeader}>
      </header>
      <Router>
          <Switch>
            <Route exact path="/">
              <Restaurant saveReservation={saveReservation}/>
            </Route>
            <Route path="/reservation">
              <Reservation />
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
