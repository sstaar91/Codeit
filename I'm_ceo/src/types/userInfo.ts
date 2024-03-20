export interface UserInfoInputType {
  [key: string]: {
    type: string;
    placeholder: string;
  };
}

export interface UserRadioType {
  id: number;
  title: string;
  name: string;
  type: string;
}

export interface SignupUserInfo {
  email: string;
  password: string;
  type: string;
}
