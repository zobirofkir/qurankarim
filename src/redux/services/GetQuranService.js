import axiosClient from "@/axios/axiosClient";

const GetQuranService = async () => await axiosClient.get("videos");

export default GetQuranService;
