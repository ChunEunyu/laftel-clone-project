import { create } from 'zustand';

const useSideBarStore = create((set) => ({
    isSideBarVisible: false,
    setIsSideBarVisible: (isVisible) => set({ isSideBarVisible: isVisible }),
}))

export default useSideBarStore;