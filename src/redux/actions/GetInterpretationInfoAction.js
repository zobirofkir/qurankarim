import GetInterpretationInfoService from "../services/GetInterpretationInfoService";
import GetInterpretationInfoType from "../types/GetInterpretationInfoType";

export const getInterpretationInfoSuccess = (interpretationInfo) => ({
    type: GetInterpretationInfoType.GET_INTERPRETATION_INFO_SUCCESS,
    payload: interpretationInfo,
});

export const getInterpretationInfoError = (error) => ({
    type: GetInterpretationInfoType.GET_INTERPRETATION_INFO_ERROR,
    payload: error,
});

const GetInterpretationInfoAction = (endpoint) => async (dispatch) => {
    try {
        dispatch({ type: GetInterpretationInfoType.GET_INTERPRETATION_INFO });
        const response = await GetInterpretationInfoService(endpoint);
        dispatch(getInterpretationInfoSuccess(response.data.tafasir));
    } catch (error) {
        dispatch(getInterpretationInfoError(error.message));
    }
};

export default GetInterpretationInfoAction;