import React from 'react';
import create from 'zustand';

const useDailyStore = create((set) => ({
    animeData: [],
    setAnimeData: (data) => set({ animeData: data})
}));

export default useDailyStore;