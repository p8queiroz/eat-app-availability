import { createStore, applyMiddleware, Store } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducers"

//import { DispatchType, ReservationAction, ReservationState } from "./type"
import logger from 'redux-logger';

//CT 
const middleWares = [thunk, logger];

//TODO
export const store: any = createStore(reducer, applyMiddleware(...middleWares))