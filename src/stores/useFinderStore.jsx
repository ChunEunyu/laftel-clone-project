import { create } from 'zustand';

const useFinderStore = create((set) => ({
    animeData: [],
    checkedItem: [[],[],[],[],[]],
    setAnimeData: (data) => set({ animeData: data}),
    setCheckedItem: (filterId, value, isChecked) => {
        set((state) => {
            const updatedCheckedItem = [...state.checkedItem];
            
            if (isChecked) {
                // 해당 filterId에 대한 체크된 아이템 배열을 업데이트합니다.
                updatedCheckedItem[filterId] = [...updatedCheckedItem[filterId], value];
            } else {
                // 해당 filterId에 대한 체크된 아이템 배열에서 value를 제거합니다.
                updatedCheckedItem[filterId] = updatedCheckedItem[filterId].filter(item => item !== value);
            }
            
            return { checkedItem: updatedCheckedItem };
        });
    },
    setResetCheckedItem: () => {
        set({ checkedItem: [[],[],[],[],[]] });
    },
}));

export default useFinderStore;
