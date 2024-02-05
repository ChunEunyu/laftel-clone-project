import { create } from 'zustand';

const useThemesStore = create((set)=>({
    themesData: [],
    setThemesData: (data) => set({ themesData: data })
}));

export default useThemesStore;