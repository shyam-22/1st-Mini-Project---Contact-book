import {createStore} from "redux"

import {composeWithDevTools} from "redux-devtools-extension"

import combineReducers from "../src/REDUX State/REDUCERS/RootReducer"

const Store = createStore(combineReducers, composeWithDevTools())

export default Store;