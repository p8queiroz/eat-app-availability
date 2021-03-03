import { IReservation } from "../models/IReservation"
import * as actionTypes from "./actionTypes"
import { ReservationAction, ReservationState } from "./type"

const initialState: ReservationState = {
    reservation: [
      {
        Id: 1,
        Date: new Date(),
        Hour: "10h",
        ReservedTo: { 
            Id: 2, 
            Email: "pqhqs@g.com",
            FirsName: "Paulo",
            LastName: "Queiroz",
            Phone: 5585242343423
        },
        TotalOcupants: 2,     
      },
      {
        Id: 3,
        Date: new Date(),
        Hour: "10h",
        ReservedTo: { 
            Id: 4, 
            Email: "pqhqs@g.com",
            FirsName: "Paulo",
            LastName: "Queiroz",
            Phone: 5585242343423
        },
        TotalOcupants: 2,     
      },
    ],
  }


  const reducer = (
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
  
  export default reducer