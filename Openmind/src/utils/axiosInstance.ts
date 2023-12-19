import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://openmind-api.vercel.app/2-1',
});

export const getAxios = async (url: string) => {
  const res = await axiosInstance.get(url);
  return res;
};

export const postAxios = async (url: string, option: any) => {
  const res = await axiosInstance.post(url, option);
  return res;
};
