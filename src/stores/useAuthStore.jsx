import { create } from 'zustand';

const useAuthStore = create((set) => ({
    userData: null,
    setUserData: (data) => set({ userData: data }),
}));

export default useAuthStore;