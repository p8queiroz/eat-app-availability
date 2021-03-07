import { IReservation } from "../models/IReservation";
import { IRestaurant } from "../models/IRestaurant";

type ReservationState = {
    reservation: IReservation
}
type RestaurantState = {
  restaurant: IRestaurant
}

type ReservationAction = {
  type: string
  reservation: IReservation
}

type RestaurantAction = {
  type: string
  restaurant: IRestaurant;
}
  
type DispatchType = (args: ReservationAction) => ReservationAction