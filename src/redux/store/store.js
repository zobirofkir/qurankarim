import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import GetQuranReducer from "../reducers/GetQuranReducer";
import GetInterpretationReducer from "../reducers/GetInterpretationReducer";

const rootReducer = combineReducers({
    quran: GetQuranReducer,
    interpretation: GetInterpretationReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
