import { create } from 'zustand';
import {GameState} from './gameStore.types';

export const useGameStore = create<GameState>((set) => ({
    score: 0,
    setScore: (newScore) => set({ score: newScore }),
    resetScore: () => set({ score: 0 }),
  }));