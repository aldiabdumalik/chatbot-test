import { atom } from 'recoil';
type modalRatingType = {
  show: boolean;
  type: string;
  idChat: number | string;
};
export const modalRatingStore = atom<modalRatingType>({
  key: 'modalRatingStore',
  default: {
    show: false,
    type: '',
    idChat: 0,
  },
});
