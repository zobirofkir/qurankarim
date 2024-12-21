import GetRecitersType from "../types/GetRecitersType";

const initialState = {
    reciters: [],
    loading: false,
    error: null,
};

const GetRecitersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetRecitersType.GET_RECITERS:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GetRecitersType.GET_RECITERS_SUCCESS:
            return {
                ...state,
                reciters: action.payload,
                loading: false,
                error: null,
            };
        case GetRecitersType.GET_RECITERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default GetRecitersReducer;