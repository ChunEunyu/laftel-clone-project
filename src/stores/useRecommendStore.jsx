import { create } from 'zustand';

const useRecommendStore = create((set) => ({
    animeData: [],
    setAnimeData: (data) => set({ animeData: data})
}));

export default useRecommendStore;
