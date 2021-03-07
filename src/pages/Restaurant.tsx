import React, { Dispatch, useEffect } from 'react';
import AvailableTimeTable from '../components/AvailableTimeTable/AvailableTimeTable';
import { IReservation } from '../models/IReservation';
import { getRestaurantData } from '../store/selectors/restaurant.selector';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import './Restaurant.css';
import { loadTimeSlotData } from '../store/actions/actions.reservation';
import { friendlyDate, friendlyDateToYYYYMMDD } from '../utils';

type Props = {
  saveReservation: (reservation: IReservation | any) => void
}

const  Restaurant: React.FC<Props> = ({ saveReservation }) =>  {

  const restaurantInfo = useSelector(getRestaurantData);
 
  const objectAttributes = restaurantInfo?.attributes;
  const { name, address_line_1 } = objectAttributes?.openings ? objectAttributes : [];
  const openingsDateTemp = Object.keys(objectAttributes?.openings || []); 
  
  const openingsDate = openingsDateTemp.map((item) => friendlyDate(item));

  const [hourOpening, setHourOpening] = React.useState<Array<string>>([]);
  const [hourSlotOpening, setHourSlotOpening] = React.useState<Array<string>>([]);
  const [searchResults, setSearchResults] =  React.useState<Boolean>(false);

  const ocupants = Array.from(Array(50).keys()).map(i => i + 1);
 
  const history = useHistory();
  const navigateTo = () => history.push('/reservation');

  const [reservation, setReservation] = React.useState<IReservation>({
    totalReservation: 2,
    date: "",
    hour: "",
    hourSlot: "",
    restaurantName: '',
    address: ''
  });
 
  useEffect(() => {
    if(reservation.hourSlot) {
      saveReservation(reservation);  navigateTo();
    } 
  }, [reservation.hourSlot])


  useEffect(() => {
    setHourOpening(restaurantInfo?.attributes?.openings[reservation.date]);
    if(!reservation.date)
    setReservation({
      ...reservation,
      'hour': '',
    });    
  }, [reservation.date])

  const search =  async (e: React.MouseEvent<HTMLInputElement>) => {
      e.stopPropagation();
      const data = await loadTimeSlotData(reservation.date, reservation.hour); 
      setHourSlotOpening(data);
      setSearchResults(true);
  }

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: unknown }>) => {
    const name = event.target.name as keyof typeof reservation;
    setReservation({
      ...reservation,
      [name]: name === 'date' ? friendlyDateToYYYYMMDD(openingsDate, openingsDateTemp, event.target.value) : event.target.value,
    });
    setSearchResults(false);
  };

  const slothour = (value: string) => {
    setReservation({
      ...reservation,
      hourSlot: value,
      restaurantName: name,
      address: address_line_1
    });    
  }

  return (
    <>
      <div className="formContainerRestaurant">
          <ul>
            <li className="reservation-section-info">
              <div>
                <h2>{name}</h2>
                <label>{address_line_1}</label>             
              </div>
              </li>
                <li>
                    <select   value={reservation.totalReservation}  name="totalReservation" className="field-style field-split-3-parts  align-left" onChange={handleChange}>          
                        {ocupants.map(item => <option key={item} value={item}>&#xf007; {` ${item} ${item > 1? 'People' : 'Person'}`} </option>)}
                    </select>
                    <select   name="date" className="field-style field-split-3-parts  align-left" onChange={handleChange}>
                      <option key={'date-option'} value="">&#xf073;  Select </option>
                          {
                            openingsDate && openingsDate.length && (
                              openingsDate.map((item) => <option key={item} value={item}>&#xf073;  {item} </option>)
                            )
                          }
                    </select>
                    <select   name="hour" className="field-style field-split-3-parts  align-left" onChange={handleChange}>
                      <option key={'hour-option'} value=""> &#xf017; Select </option>
                          {
                            hourOpening && hourOpening.length && (
                              hourOpening.map((item) => <option key={item} value={item}> &#xf017; {item} </option>)
                            )
                          }
                    </select>
                    <input type="submit"  className="field-style" onClick={search} value="Search" />
                </li>
                <li>
                  {searchResults && hourSlotOpening && hourSlotOpening.length && (<AvailableTimeTable hourSlotOpening={hourSlotOpening} slothour={slothour}/>)}                  
                </li>
          </ul>
      </div>              
    </>
  );
}

export default Restaurant;
