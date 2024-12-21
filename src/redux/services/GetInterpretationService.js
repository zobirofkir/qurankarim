import axiosClient from "@/axios/axiosClient";

const GetInterpretationService = async () => {
    return axiosClient.get('tafasir');
};


export default GetInterpretationService;