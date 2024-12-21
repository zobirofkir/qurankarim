import RadioType from "../types/RadioType";

const initialState = {
    radio: [],
    loading: false,
    error: null,
};

const radioReducer = (state = initialState, action) => {
    switch (action.type) {
        case RadioType.GET_RADIO:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case RadioType.GET_RADIO_SUCCESS:
            return {
                ...state,
                radio: action.payload,
                loading: false,
                error: null,    
            };
        case RadioType.GET_RADIO_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }   
};
    
export default radioReducer;
