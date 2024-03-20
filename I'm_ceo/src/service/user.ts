import axios, { AxiosResponse } from "axios";
import { SignupUserInfo } from "@_type/userInfo";

export const postSignUp = (body: SignupUserInfo): Promise<AxiosResponse> => {
  return axios.post(`${import.meta.env.VITE_BASE_URL}/users`, body);
};
