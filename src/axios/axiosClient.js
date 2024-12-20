import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'https://mp3quran.net/api/v3/videos',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default axiosClient;
