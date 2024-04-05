import { ShopDataType } from "./userInfo";

export interface INoticeList {
  item: NoticeListType;
}

export interface NoticeInputType {
  [key: string]: string | number;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
}

export interface NoticeListType {
  id: string;
  closed: boolean;
  description: string;
  hourlyPay: string;
  startsAt: string;
  workhour: string;
  shop?: {
    href: string;
    item: ShopDataType;
  };
}

export interface InfoDetail {
  imageUrl?: string;
  name?: string;
  address1?: string;
  address2?: string;
  workhour?: string;
  category?: string;
  startsAt?: string;
  hourlyPay?: string;
  description?: string;
  originalHourlyPay?: string;
  bio?: string;
  address?: string;
}
