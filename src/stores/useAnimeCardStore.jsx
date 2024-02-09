import { create } from 'zustand';

const useAnimeCardStore = create((set) => ({
  allInfo: [],
  setAllInfo: (data) => set({ allInfo: data }),
}));

export default useAnimeCardStore;
