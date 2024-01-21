import { dummyChat } from '@/lib/dummy';
import { ResultData } from '@/types/dataType';
import { atom } from 'recoil';

export const chatStore = atom<ResultData[] | []>({
  key: 'chatStore',
  default: [],
});
export const clientIdStore = atom({
  key: 'clientIdStore',
  default: 0,
});
export const aiIsLoading = atom({
  key: 'aiIsLoading',
  default: false,
});
