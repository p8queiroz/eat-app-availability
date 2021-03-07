import { IReservation } from "../../models/IReservation"
import * as actionTypes from "../actionTypes"
import { ReservationAction, ReservationState } from "../type"

const initialState: ReservationState = {
    reservation: {
      totalReservation: 2,
      date: "",
      hour: "",
      hourSlot: "",
      restaurantName: '',
      address: ''
    },
  }


  const reservationReducer = (
    state: ReservationState = initialState,
    action: ReservationAction
  ): ReservationState => {
    switch (action.type) {
        
      case actionTypes.ADD_RESERVATION:
        return {
          ...state,
          reservation : action.reservation,
        }

     case actionTypes.REMOVE_RESERVATION:
        return {
          ...state,
          reservation: initialState.reservation,
        }
    }
    return state
  }
  
  export default reservationReducer