import axiosClient from "@/axios/axiosClient";

const GetInterpretationService = async () => {
    return axiosClient.get('tafasir&language=ar');
};


export default GetInterpretationService;