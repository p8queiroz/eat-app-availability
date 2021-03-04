import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"
import { DispatchType, ReservationAction, ReservationState } from "./type"
import logger from 'redux-logger';

//CT 
const middleWares = [thunk, logger];

export const store: Store<ReservationState, ReservationAction> & {
    dispatch: DispatchType
} = createStore(reducer, applyMiddleware(...middleWares))