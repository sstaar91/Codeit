import { api } from "@_lib/api";
import { NoticeInputType } from "@_type/notice";

export const postApplyNotice = (body: NoticeInputType) => {
  return api.post(`${import.meta.env.VITE_BASE_URL}/shops/${localStorage.getItem("shopId")}/notices`, body);
};

export const getShopNotice = (id: string) => {
  return api.get(`${import.meta.env.VITE_BASE_URL}/shops/${id}/notices?limit=6`);
};

export const getUserNotice = (id: string) => {
  return api.get(`${import.meta.env.VITE_BASE_URL}/users/${id}/applications?limit=6`);
};
