import { dummyChat } from '@/lib/dummy';
import { ResultData } from '@/types/dataType';
import { atom } from 'recoil';

export const chatStore = atom<ResultData[] | []>({
  key: 'chatStore',
  default: dummyChat,
});
