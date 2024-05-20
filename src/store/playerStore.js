import { create } from 'zustand';

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  volume: 1,
  setVolume: (volume) => set({ volume }),
  currentMusic: { playlist: null, musics: null, music: null },
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
}));
