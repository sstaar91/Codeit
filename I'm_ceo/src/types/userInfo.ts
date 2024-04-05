export interface UserRadioType {
  id: number;
  title: string;
  name: string;
  type: string;
}

export interface SigninUserInfo {
  email: string;
  password: string;
}

export interface SignupUserInfo {
  email: string;
  password: string;
  type: string;
}

export interface GetUserInfo {
  id: string;
  email: string;
  type: "employer" | "employee";
  name?: string;
  phone?: string;
  address?: string;
  bio?: string;
  shop: {
    item: ShopDataType;
  } | null;
}

export interface DetailUserInfo extends EmployeeDetailInfo, EmployerDetailInfo {
  [key: string]: string | number | undefined | null;
}

export interface EmployeeDetailInfo {
  name: string;
  address?: string;
  phone?: string;
  bio?: string;
}

export interface EmployerDetailInfo {
  name: string;
  category?: string;
  address1?: string;
  address2?: string;
  originalHourlyPay?: number | null;
  imageUrl?: string;
  description?: string;
}

export interface ShopDataType {
  id: string;
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}
