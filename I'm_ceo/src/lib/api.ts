import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { errorInterceptor, requestInterceptor, successInterceptor } from "./interceptor";

const axiosRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json;charset=utf-8",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
    "Access-Control-Allow-Origin": "*",
  },
};

const api: AxiosInstance = axios.create(axiosRequestConfig);

api.interceptors.request.use(requestInterceptor);
api.interceptors.response.use(successInterceptor, errorInterceptor);

export { api };
