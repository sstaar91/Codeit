import { UserInfoInputType } from "@_type/userInfo";

export const emailValid =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

export const passwordValid = /^(?=.*[a-z])[a-z\d]{8,}$/;

export const USER_INFO = {
  email: "",
  password: "",
  type: "",
};

export const userInfoList: UserInfoInputType = {
  email: { type: "text", placeholder: "이메일을 입력해주세요" },
  password: {
    type: "password",
    placeholder: "비밀번호를 입력해주세요",
  },
};

export const userRadioList = [
  { id: 1, title: "가맹점주", name: "type", type: "employee" },
  { id: 2, title: "본사", name: "type", type: "employer" },
];
