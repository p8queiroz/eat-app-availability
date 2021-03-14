import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import styles from './Reservation.module.scss';
import { getReservationData } from '../store/selectors/reservation.selector';
import { friendlyDate, joinAll } from '../utils';

const  Reservation: React.FC = () =>  {
  
  const history = useHistory();
  const reservationData = useSelector(getReservationData);
  const { restaurantName, address, date, hour, hourSlot, totalReservation } = reservationData;
  const navigateTo = (e: React.MouseEvent<HTMLInputElement>) => { e.stopPropagation();  history.push('/');}

  return (
    <>
    <div className={styles.formContainer}>
      <ul>
            <li className={styles.reservationSectionInfo}>
               <div>
                 <h2>{restaurantName}</h2>
                 <label>{address}</label>
               </div>
               <div className={styles.reservationSectionSchedule}>
                  <div>reservation for {friendlyDate(date)}, at { hourSlot }  for {totalReservation} {`${totalReservation > 1? 'People' : 'Person'}`}</div>
               </div>
             </li>
            <li>
                <input type="text" name="firstName" className={joinAll(styles.fieldStyle,  styles.fieldSplit, styles.alignLeft)}  placeholder="First Name" />
                <input type="text" name="lastName" className={joinAll(styles.fieldStyle,  styles.fieldSplit, styles.alignRight)} placeholder="Last Name" />
            </li>
            <li>
                <select className={styles.alignLeft}><option>Code</option><option>+55</option></select>
                <input type="text" name="phoneNumber" className={joinAll(styles.fieldStyle,  styles.fieldSplit3Parts, styles.alignLeft)} placeholder="Phone Number" />
                <input type="email" name="email" className={joinAll(styles.fieldStyle,  styles.fieldSplit, styles.alignRight)} placeholder="Email" />
            </li>
            <li>
              <textarea name="specialRequests" className={styles.fieldStyle} placeholder="Special Requests"></textarea>
            </li>
            <li>
              <div className={styles.alignLeft}>
                by continuing, you agree to Eat's Terms of Service and Policy.
              </div>
            </li>
            <li>
             <input className={styles.alignLeft} type="submit" value="Complete Reservation" onClick={navigateTo} />
            </li>
      </ul>
    </div>
      <div><span>Powered by Eat</span></div>
    </>
  );
}

export default Reservation;
