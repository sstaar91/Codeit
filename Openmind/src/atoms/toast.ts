import { atom } from 'recoil';

interface List {
  id: number;
  text: string;
}

export const toastList = atom<List[]>({
  key: 'toastList',
  default: [],
});
