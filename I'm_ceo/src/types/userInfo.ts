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
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
    };
  } | null;
}

export interface DetailUserInfo {
  [key: string]: string | number | undefined | null;
  name: string;
  category?: string;
  address?: string;
  address1?: string;
  address2?: string;
  phone?: string;
  bio?: string;
  originalHourlyPay?: number | null;
  imageUrl?: string;
  description?: string;
}
