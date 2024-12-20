import axiosClient from "@/axios/axiosClient";

const GetQuranService = async (endpoint) => {
    return axiosClient.get(endpoint);
};

export default GetQuranService;
