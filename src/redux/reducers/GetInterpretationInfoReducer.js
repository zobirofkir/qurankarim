import GetInterpretationInfoType from "../types/GetInterpretationInfoType";

const initialState = {
    interpretationInfo: [],
    loading: false, 
    error: null,
};

const GetInterpretationInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetInterpretationInfoType.GET_INTERPRETATION_INFO:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GetInterpretationInfoType.GET_INTERPRETATION_INFO_SUCCESS:
            return {
                ...state,
                interpretationInfo: action.payload,
                loading: false,
                error: null,
            };
        case GetInterpretationInfoType.GET_INTERPRETATION_INFO_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default GetInterpretationInfoReducer;