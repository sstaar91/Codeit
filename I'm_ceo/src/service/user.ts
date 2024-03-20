import axios, { AxiosResponse } from "axios";
import { SigninUserInfo, SignupUserInfo } from "@_type/userInfo";

export const postSignIn = (body: SigninUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/token`, body);
};

export const postSignUp = (body: SignupUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body);
};
