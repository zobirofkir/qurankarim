import GetQuranService from "../services/GetQuranService";
import GetQuranType from "../types/GetQuranType";

export const getQuranSuccess = (quran) => ({
    type: GetQuranType.GET_QURAN_SUCCESS,
    payload: quran,
});

export const getQuranError = (error) => ({
    type: GetQuranType.GET_QURAN_ERROR,
    payload: error,
});

const GetQuranAction = (endpoint) => async (dispatch) => {
    try {
        dispatch({ type: GetQuranType.GET_QURAN });
        const response = await GetQuranService(endpoint);

        const normalizedData = response.data.videos.flatMap((reciter) =>
            reciter.videos.map((video) => ({
                id: video.id,
                reciter_name: reciter.reciter_name,
                video_thumb_url: video.video_thumb_url,
                video_url: video.video_url,
            }))
        );

        dispatch(getQuranSuccess(normalizedData));
    } catch (error) {
        dispatch(getQuranError(error.message));
    }
};

export default GetQuranAction;
