import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface StartDetoxState {
  completedUids: string[];
  toggleCompletedUid: (uid: string) => void;
}

export const useStartDetoxStore = create<StartDetoxState>()(
  persist(
    (set) => ({
      completedUids: [],
      toggleCompletedUid: (uid: string) =>
        set((state) => ({
          completedUids: state.completedUids.includes(uid)
            ? state.completedUids.filter((id) => id !== uid)
            : [...state.completedUids, uid],
        })),
    }),
    {
      name: 'start-detox-plans',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
