import { IReservation } from "../../models/IReservation"
import * as actionTypes from "../actionTypes"
import { ReservationAction, ReservationState } from "../type"

const initialState: ReservationState = {
    reservation: [],
  }


  const reservationReducer = (
    state: ReservationState = initialState,
    action: ReservationAction
  ): ReservationState => {
    switch (action.type) {
        
      case actionTypes.ADD_RESERVATION:

        const newReservation: IReservation = {
          Id: Math.random(), // not really unique
          Date: new Date(),
          Hour: action.reservation.Hour,
          ReservedTo: action.reservation.ReservedTo,
          TotalOcupants: action.reservation.TotalOcupants
        }
        return {
          ...state,
          reservation : state.reservation.concat(newReservation),
        }

      case actionTypes.REMOVE_RESERVATION:

        const updatedReservations: IReservation[] = state.reservation.filter(
          reserv => reserv.Id !== action.reservation.Id
        )
        return {
          ...state,
          reservation: updatedReservations,
        }
    }
    return state
  }
  
  export default reservationReducer