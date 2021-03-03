import { IReservation } from "../models/IReservation";

type ReservationState = {
    reservation: IReservation[]
}
  
  type ReservationAction = {
    type: string
    reservation: IReservation
  }
  
  type DispatchType = (args: ReservationAction) => ReservationAction