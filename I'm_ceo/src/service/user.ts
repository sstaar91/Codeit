import axios, { AxiosResponse } from "axios";
import { SigninUserInfo, SignupUserInfo } from "@_type/userInfo";
import { api } from "@_lib/api";

export const postSignIn = (body: SigninUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/token`, body);
};

export const postSignUp = (body: SignupUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body);
};

export const getUserInfo = () => {
  return api.get(`${import.meta.env.VITE_BASE_URL}/users/${localStorage.getItem("userId")}`);
};

