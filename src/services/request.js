import axios from "axios";
import constantApi from "../constants/constantApi";

const baseAPI = constantApi.BASE_API;
const service = axios.create({
  baseURL: baseAPI,
  timeout: 1800000,
});

// Request interceptors
service.interceptors.request.use(
  (config) => {
    config.headers["X-Requested-With"] = "XMLHttpRequest";
    /**
     * Have not implemented the login function,
     * temporarily comment
     */
    // if (localStorage.getItem("TOKEN_ADMIN")) {
    //   config.headers["Authorization"] =
    //     "Bearer " + localStorage.getItem("TOKEN_ADMIN");
    // }
    return config;
  },
  (error) => {
    // Do something with request error
    Promise.reject(error);
  }
);

export default service;
