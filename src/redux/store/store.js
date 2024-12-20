import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import GetQuranReducer from "../reducers/GetQuranReducer";

const rootReducer = combineReducers({
    quran: GetQuranReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
