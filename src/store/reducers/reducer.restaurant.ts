import * as actionTypes from "../actionTypes"
import { RestaurantAction, RestaurantState } from "../type"

const initialState: RestaurantState = {} as any


  const restaurantReducer = (
    state: RestaurantState = initialState,
    action: RestaurantAction
  ): RestaurantState => {
    switch (action.type) {
        
      case actionTypes.ADD_RESTAURANT:
        return {
          ...state,
          restaurant : action.restaurant,
        }
    }
    return state
  }
  
  export default restaurantReducer