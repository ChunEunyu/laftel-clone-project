import { create } from 'zustand';

const useSearchStore = create((set) => ({
    keyword:'',
    searchHistory: [],
    setKeyword: (newKeyword) => set({ keyword: newKeyword }),
    addToSearchHistory: (searchKeyword) => set((state) => {
        const updatedSearchHistory = [searchKeyword, ...state.searchHistory].slice(0, 5);
        return { searchHistory: updatedSearchHistory };
    })
}));

export default useSearchStore;
