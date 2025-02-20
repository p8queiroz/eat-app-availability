import { IReservation } from "../../models/IReservation";
import { DispatchType, ReservationAction, RestaurantAction } from "../type";
import * as actionTypes from "../actionTypes";
import { getRestautant, getTimeSlots } from "../../data/dataApi";

const  simulateHttpRequest = (action: ReservationAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}

export const loadRestautantData = async (dispatch: React.Dispatch<any>) => {
  const restaurant = await getRestautant();
   const action: RestaurantAction = {
      type: actionTypes.ADD_RESTAURANT,
      restaurant: restaurant
    }
  return  dispatch(action);
};

export const loadTimeSlotData = async (date: string, hour: string) => {
  const timeSlots = await getTimeSlots(date, hour);
  return  timeSlots;
};


export const addReservation = (reservation: IReservation) => {
   debugger
  const action: ReservationAction = {
      type: actionTypes.ADD_RESERVATION,
      reservation,
    }
    return simulateHttpRequest(action)
}
  
export const removeReservation = (reservation: IReservation) => {
    const action: ReservationAction = {
      type: actionTypes.REMOVE_RESERVATION,
      reservation,
    }
    return simulateHttpRequest(action)
  }
  
