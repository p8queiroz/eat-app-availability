import React, { Dispatch, useEffect } from 'react';
import AvailableTimeTable from '../components/AvailableTimeTable/AvailableTimeTable';
import { IReservation } from '../models/IReservation';
import { getRestaurantData } from '../store/selectors/restaurant.selector';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import styles from './Restaurant.module.scss';
import { loadTimeSlotData } from '../store/actions/actions.reservation';
import { friendlyDate, friendlyDateToYYYYMMDD, joinAll } from '../utils';

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
      <div className={styles.formContainerRestaurant}>
          <ul>
            <li className={styles.reservationSectionInfo}>
              <section>
                <h2>{name}</h2>
                <label>{address_line_1}</label>             
              </section>
              </li>
                <li>
                    <div className={ joinAll(styles.restaurant, styles.borderRadiusLeft)}><i className="fas fa-user"></i> </div>
                    <select   value={reservation.totalReservation}  name="totalReservation" className={ joinAll(styles.fieldStyle, styles.borderRadiusLeft, styles.fieldSplit3Parts, styles.alignLeft) } onChange={handleChange}>          
                        {ocupants.map(item => <option key={item} value={item}>{` ${item} ${item > 1? 'People' : 'Person'}`} </option>)}
                    </select>
                    <div className={ joinAll(styles.restaurant, styles.borderRadiusMiddle)}><i className="fas fa-calendar"></i></div>
                    <select   name="date" className={ joinAll(styles.fieldStyle, styles.fieldSplit3Parts, styles.alignLeft)}  onChange={handleChange}>
                      <option key={'date-option'} value=""> Select </option>
                          {
                            openingsDate && openingsDate.length && (
                              openingsDate.map((item) => <option key={item} value={item}> {item} </option>)
                            )
                          }
                    </select>
                    <div className={ joinAll(styles.restaurant, styles.borderRadiusMiddle)}><i className="fas fa-clock-o"></i></div>
                    <select   name="hour" className={ joinAll(styles.fieldStyle, styles.fieldSplit3Parts, styles.alignLeft)} onChange={handleChange}>
                      <option key={'hour-option'} value=""> Select </option>
                          {
                            hourOpening && hourOpening.length && (
                              hourOpening.map((item) => <option key={item} value={item}> {item} </option>)
                            )
                          }
                    </select>
                    <input type="submit"  className={joinAll(styles.fieldStyle, styles.restaurant, styles.borderRadiusRight)} onClick={search} value="Search" />
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
