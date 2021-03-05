import { DispatchType, ReservationAction, RestaurantAction } from "../type"
import * as actionTypes from "../actionTypes"
import { getRestautant } from "../../data/dataApi"

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

