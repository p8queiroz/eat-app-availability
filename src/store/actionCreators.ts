import { IReservation } from "../models/IReservation"
import { DispatchType, ReservationAction } from "./type"
import * as actionTypes from "./actionTypes"

export const  addReservation = (reservation: IReservation) => {
   
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
  
const  simulateHttpRequest = (action: ReservationAction) => {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}