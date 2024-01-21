import { ResultData } from '@/types/dataType';
import { atom } from 'recoil';
type modalRatingType = {
  show: boolean;
  type: string;
  idChat: number | string;
};
type modalDeleteType = {
  show: boolean;
  data: ResultData[] | [];
};
export const modalRatingStore = atom<modalRatingType>({
  key: 'modalRatingStore',
  default: {
    show: false,
    type: '',
    idChat: 0,
  },
});

export const modalDeleteStore = atom<modalDeleteType>({
  key: 'modalDeleteStore',
  default: {
    show: false,
    data: [],
  },
});
