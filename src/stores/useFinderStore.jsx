import { create } from 'zustand';

const useFinderStore = create((set) => ({
    animeData: [],
    checkedItem: [],
    setAnimeData: (data) => set({ animeData: data}),
    setCheckedItem: (value, isChecked) => {
        set((state) => ({
            checkedItem: isChecked ? [...state.checkedItem, value] : state.checkedItem.filter(item => item !== value)
        }));
    },
    setResetCheckedItem: () => {
        set({ checkedItem: [] });
    },
}));

export default useFinderStore;
