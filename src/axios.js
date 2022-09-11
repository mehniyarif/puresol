// axios
import axios from "axios";

const baseURL =
    process.env.VUE_APP_API_URL !== undefined
        ? process.env.VUE_APP_API_URL
        : "http://localhost:3000/";

let axiosInstance = axios.create({
    baseURL: baseURL,
    // You can add your headers here
});

export default axiosInstance;
