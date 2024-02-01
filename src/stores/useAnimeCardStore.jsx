import { create } from 'zustand';

const useAnimeCardStore = create((set) => ({
  imgUrl: '',
  title: '',
  setAnimeCardData: (imgUrl, title) => set({ imgUrl, title }),
}));

export default useAnimeCardStore;
