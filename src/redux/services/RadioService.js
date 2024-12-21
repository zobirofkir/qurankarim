import axiosClient from "@/axios/axiosClient";

const RadioService = async () => {
    return await axiosClient.get('radios?language=ar');
};

export default RadioService;
