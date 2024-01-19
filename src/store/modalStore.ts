import { atom } from 'recoil';

export const modalRatingStore = atom({
  key: 'modalRatingStore',
  default: {
    show: false,
    type: '',
  },
});
