import { applyMiddleware, combineReducers, createStore } from "redux";
import {thunk} from "redux-thunk";
import GetQuranReducer from "../reducers/GetQuranReducer";
import GetInterpretationReducer from "../reducers/GetInterpretationReducer";
import GetInterpretationInfoReducer from "../reducers/GetInterpretationInfoReducer";
import radioReducer from "../reducers/RadioReducer";
import GetRecitersReducer from "../reducers/GetRecitersReducer";

const rootReducer = combineReducers({
    quran: GetQuranReducer,
    interpretation: GetInterpretationReducer,
    interpretationInfo: GetInterpretationInfoReducer,
    radio: radioReducer,
    reciters: GetRecitersReducer,
});

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

export default store;
