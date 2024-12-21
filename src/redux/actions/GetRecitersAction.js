import GetRecitersService from "../services/GetRecitersService";
import GetRecitersType from "../types/GetRecitersType";

export const getRecitersSuccess = (reciters) => ({
    type: GetRecitersType.GET_RECITERS_SUCCESS,
    payload: reciters,
});

export const getRecitersFail = (error) => ({
    type: GetRecitersType.GET_RECITERS_ERROR,
    payload: error,
});

const GetRecitersAction = () => async (dispatch) => {
    try {
        dispatch({ type: GetRecitersType.GET_RECITERS });
        const response = await GetRecitersService();
        console.log(response.data.reciters);
        dispatch(getRecitersSuccess(response.data.reciters || []));
    } catch (error) {
        dispatch(getRecitersFail(error.message || "Error fetching reciters"));
    }
};

export default GetRecitersAction;