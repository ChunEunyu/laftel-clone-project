import { create } from 'zustand';

const useFinderStore = create((set) => ({
    animeData: [],
    setAnimeData: (data) => set({ animeData: data})
}));

export default useFinderStore;
