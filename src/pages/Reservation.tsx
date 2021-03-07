import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import './Reservation.css';
import { getReservationData } from '../store/selectors/reservation.selector';

const  Reservation: React.FC = () =>  {
  
  const history = useHistory();
  const reservationData = useSelector(getReservationData);
  const { restaurantName, address, date, hour, hourSlot, totalReservation } = reservationData;
  const navigateTo = (e: React.MouseEvent<HTMLInputElement>) => { e.stopPropagation();  history.push('/');}

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //setName(event.target.value);
  };

  return (
    <>
    <div className="formContainer">
      <ul>
            <li className="reservation-section-info">
               <div>
                 <h2>{restaurantName}</h2>
                 <label>{address}</label>
               </div>
               <div className="reservation-section-schedule">
                  <div>reservation for {date}, at { hourSlot }  for {totalReservation} {`${totalReservation > 1? 'People' : 'Person'}`}</div>
               </div>
             </li>
            <li>
                <input type="text" name="field1" className="field-style field-split align-left" placeholder="First Name" />
                <input type="text" name="field2" className="field-style field-split align-right" placeholder="Last Name" />
            </li>
            <li>
                <select className="align-left "><option>Code</option><option>+55</option></select>
                <input type="text" name="field3" className="field-style align-left field-split-3-parts" placeholder="Phone Number" />
                <input type="email" name="field4" className="field-style field-split align-right" placeholder="Email" />
            </li>
            <li>
              <textarea name="field5" className="field-style" placeholder="Special Requests"></textarea>
            </li>
            <li>
              <div className="align-left">
                by continuing, you agree to Eat's Terms of Service and Policy.
              </div>
            </li>
            <li>
             <input type="submit" value="Complete Reservation" onClick={navigateTo} />
            </li>
      </ul>
    </div>
      <div><span>Powered by Eat</span></div>
    </>
  );
}

export default Reservation;
