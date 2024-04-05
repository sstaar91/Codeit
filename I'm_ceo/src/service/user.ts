import axios, { AxiosResponse } from "axios";
import { api } from "@_lib/api";
import { EmployeeDetailInfo, EmployerDetailInfo, SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

export const postSignIn = (body: SigninUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/token`, body);
};

export const postSignUp = (body: SignupUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body);
};

export const getUserInfo = (id: string) => {
  return api.get(`${import.meta.env.VITE_BASE_URL}/users/${id}`);
};

export const postEmployeeDetail = (body: EmployeeDetailInfo) => {
  return api.put(`${import.meta.env.VITE_BASE_URL}/users/${localStorage.getItem("userId")}`, body);
};

export const postEmployerDetail = (body: EmployerDetailInfo) => {
  return api.post(`${import.meta.env.VITE_BASE_URL}/shops`, body);
};

export const putEmployerDetail = (body: EmployerDetailInfo) => {
  return api.put(`${import.meta.env.VITE_BASE_URL}/shops/${localStorage.getItem("shopId")}`, body);
};
