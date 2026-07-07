import axios from "axios";

const axiosClient = axios.create({

    baseURL: "/api",

    timeout: 10000,

    headers: {
        Accept: "application/json",
    },

});

export default axiosClient;