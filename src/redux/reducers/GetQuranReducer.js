import GetQuranType from "../types/GetQuranType";

const initialState = {
    quran: [],
    loading: false,
    error: null,
};

const GetQuranReducer = (state = initialState, action) => {
    switch (action.type) {
        case GetQuranType.GET_QURAN:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case GetQuranType.GET_QURAN_SUCCESS:
            return {
                ...state,
                quran: action.payload,
                loading: false,
                error: null,
            };
        case GetQuranType.GET_QURAN_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default GetQuranReducer;
