import axiosClient from "@/axios/axiosClient";

const GetRecitersService = async () => {
    return await axiosClient.get('reciters');
}

export default GetRecitersService;