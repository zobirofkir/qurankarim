import GetInterpretationType from "../types/GetInterpretationType";

const initialState = {
    interpretation: [],
    loading: false,
    error: null,
};

const GetInterpretationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetInterpretationType.GET_INTERPRETATION:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GetInterpretationType.GET_INTERPRETATION_SUCCESS:
            return {
                ...state,
                interpretation: action.payload,
                loading: false,
                error: null,
            };
        case GetInterpretationType.GET_INTERPRETATION_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default GetInterpretationReducer;