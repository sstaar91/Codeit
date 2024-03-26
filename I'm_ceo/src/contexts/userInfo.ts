import { UserInfoInputType } from "@_type/userInfo";

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
  name: {
    type: "text",
    placeholder: "이름을 적어주세요",
  },
  phone: {
    type: "number",
    placeholder: "핸드폰 번호를 적어주세요",
  },
  address2: {
    type: "text",
    placeholder: "상세 주소를 작성해주세요",
  },
  originalHourlyPay: {
    type: "number",
    placeholder: "최소 창업 비용을 기입해주세요",
  },
};

export const userRadioList = [
  { id: 1, title: "👩‍🍳 가맹점주", name: "type", type: "employee" },
  { id: 2, title: "👨‍💻 본사", name: "type", type: "employer" },
];

export const EMPLOYER_DETAIL_INFO = {
  name: "",
  category: "",
  address1: "",
  address2: "",
  description: "",
  imageUrl: "",
  originalHourlyPay: null,
};

export const EMPLOYEE_DETAIL_INFO = { name: "", phone: "", address: "", bio: "" };

export const employerInputList = [
  { id: 1, name: "name", component: "input" },
  { id: 2, name: "category", component: "select" },
  { id: 3, name: "address1", component: "select" },
  { id: 4, name: "address2", component: "input" },
  { id: 5, name: "originalHourlyPay", component: "input" },
  { id: 6, name: "imageUrl", component: "image" },
  { id: 7, name: "description", component: "textarea" },
];

export const employeeInputList = [
  { id: 1, name: "name", component: "input" },
  { id: 2, name: "phone", component: "input" },
  { id: 3, name: "address", component: "select" },
  { id: 4, name: "bio", component: "textarea" },
];

export const categorySelectList = ["한식", "중식", "일식", "양식", "분식", "카페", "편의점", "기타"];
export const addressSelectList = [
  "종로구",
  "중구",
  "용산구",
  "성동구",
  "광진구",
  "동대문구",
  "중랑구",
  "성북구",
  "강북구",
  "도봉구",
  "노원구",
  "은평구",
  "서대문구",
  "마포구",
  "양천구",
  "강서구",
  "구로구",
  "금천구",
  "영등포구",
  "동작구",
  "관악구",
  "서초구",
  "강남구",
  "송파구",
  "강동구",
];
