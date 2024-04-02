export const inputProperty: {
  [key: string]: {
    type: string;
    placeholder: string;
  };
} = {
  email: { type: "text", placeholder: "이메일을 입력해주세요" },
  password: { type: "password", placeholder: "비밀번호를 입력해주세요" },
  name: { type: "text", placeholder: "이름을 적어주세요" },
  phone: { type: "number", placeholder: "핸드폰 번호를 적어주세요" },
  address2: { type: "text", placeholder: "상세 주소를 작성해주세요" },
  originalHourlyPay: { type: "number", placeholder: "최소 창업 비용을 기입해주세요" },
  hourlyPay: { type: "number", placeholder: "평균 매출 비용을 적어주세요" },
  startsAt: { type: "date", placeholder: "공고 시작일을 선택해주세요" },
  workhour: { type: "number", placeholder: "평균 업무 시간을 적어주세요" },
};

export const userRadioList = [
  { id: 1, title: "👩‍🍳 가맹점주", name: "type", type: "employee" },
  { id: 2, title: "👨‍💻 본사", name: "type", type: "employer" },
];

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

export const registeNoticeList = [
  { id: 1, name: "hourlyPay", component: "input" },
  { id: 2, name: "startsAt", component: "input" },
  { id: 3, name: "workhour", component: "input" },
  { id: 4, name: "description", component: "textarea" },
];

export const categorySelectList = ["한식", "중식", "일식", "양식", "분식", "카페", "편의점", "기타"];
export const addressSelectList = [
  "서울시 종로구",
  "서울시 중구",
  "서울시 용산구",
  "서울시 성동구",
  "서울시 광진구",
  "서울시 동대문구",
  "서울시 중랑구",
  "서울시 성북구",
  "서울시 강북구",
  "서울시 도봉구",
  "서울시 노원구",
  "서울시 은평구",
  "서울시 서대문구",
  "서울시 마포구",
  "서울시 양천구",
  "서울시 강서구",
  "서울시 구로구",
  "서울시 금천구",
  "서울시 영등포구",
  "서울시 동작구",
  "서울시 관악구",
  "서울시 서초구",
  "서울시 강남구",
  "서울시 송파구",
  "서울시 강동구",
];

export const textareaProperty: {
  [key: string]: {
    name: string;
    placeholder: string;
  };
} = {
  employer: { name: "description", placeholder: "본사" },
  employee: { name: "bio", placeholder: "점주님" },
  notice: { name: "description", placeholder: "공고" },
};
