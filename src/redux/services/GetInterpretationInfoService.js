import axiosClient from "@/axios/axiosClient";

const GetInterpretationInfoService = async (id) => axiosClient.get(`tafsir?tafsir=${id}`);

export default GetInterpretationInfoService;