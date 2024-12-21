import RadioService from "../services/RadioService";
import RadioType from "../types/RadioType";

export const getRadioSuccess = (radio) => {
    return {
        type: RadioType.GET_RADIO_SUCCESS,
        payload: radio,
    };
};

export const getRadioError = (error) => {
    return {
        type: RadioType.GET_RADIO_FAIL,
        payload: error,
    };
};

const GetRadioAction = () => async (dispatch) => {
    try {
        dispatch({ type: RadioType.GET_RADIO });
        const response = await RadioService();
        dispatch(getRadioSuccess(response.data.radios || []));
    } catch (error) {
        dispatch(getRadioError(error.message || "Error fetching radios"));
    }
};

export default GetRadioAction;
