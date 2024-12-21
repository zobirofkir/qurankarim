import GetInterpretationService from "../services/GetInterpretationService";
import GetInterpretationType from "../types/GetInterpretationType";

export const getInterpretationSuccess = (interpretation) => ({
    type: GetInterpretationType.GET_INTERPRETATION_SUCCESS,
    payload: interpretation,
});

export const getInterpretationError = (error) => ({
    type: GetInterpretationType.GET_INTERPRETATION_ERROR,
    payload: error,
});

const GetInterpretationAction = (endpoint) => async (dispatch) => {
    try {
        dispatch({ type: GetInterpretationType.GET_INTERPRETATION });
        const response = await GetInterpretationService(endpoint);
        dispatch(getInterpretationSuccess(response.data.tafasir));
    } catch (error) {
        dispatch(getInterpretationError(error.message));
    }
};

export default GetInterpretationAction;