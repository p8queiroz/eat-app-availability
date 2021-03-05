import { combineReducers } from "redux"

import  reservationReducer  from './reducer.reservation';
import  restaurantReducer  from './reducer.restaurant';

const rootReducer = combineReducers({
    reservationData: reservationReducer,
    restaurantData: restaurantReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
