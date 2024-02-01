import { create } from 'zustand';
import { getCurrentDayOfWeek } from '../utils/getCurrentDayOfWeek';

const useDailyStore = create((set) => ({
    animeData: [],
    categorizedData: Array.from({ length: 7 }, () => []),
    selectedDay: getCurrentDayOfWeek(),
    selectedDayData: [],
    setAnimeData: (data) => set({ animeData: data}),
    setCategorizedData: (data) => set({ categorizedData: data }),
    setSelectedDay: (day) => set({ selectedDay: day }),
    setSelectedDayData: (data) => set({ selectedDayData: data}),
}));

export default useDailyStore;