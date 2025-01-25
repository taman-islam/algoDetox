import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { PlatformName } from '../platforms/websiteData';

type RecoveryPathState = {
  activeStep: number;
  selectedPlatforms: PlatformName[];
  setActiveStep: (steps: number) => void;
  setSelectedPlatforms: (platforms: PlatformName[]) => void;
  addSelectedPlatform: (platform: PlatformName) => void;
  removeSelectedPlatform: (platform: PlatformName) => void;
  clearSelectedPlatforms: () => void;
  toggleSelectedPlatform: (platform: PlatformName) => void;
};

export const useRecoveryPathStore = create<RecoveryPathState>()(
  persist(
    (set, get) => ({
      activeStep: 1,
      selectedPlatforms: [],
      setActiveStep: (steps) => set({ activeStep: steps }),
      setSelectedPlatforms: (platforms) =>
        set({ selectedPlatforms: platforms }),
      addSelectedPlatform: (platform: PlatformName) =>
        set((state) => ({
          selectedPlatforms: [...state.selectedPlatforms, platform],
        })),
      removeSelectedPlatform: (platform: PlatformName) =>
        set((state) => ({
          selectedPlatforms: state.selectedPlatforms.filter(
            (p) => p !== platform,
          ),
        })),
      clearSelectedPlatforms: () => set({ selectedPlatforms: [] }),
      toggleSelectedPlatform: (platform: PlatformName) =>
        set((state) => ({
          selectedPlatforms: state.selectedPlatforms.includes(platform)
            ? state.selectedPlatforms.filter((p) => p !== platform)
            : [...state.selectedPlatforms, platform],
        })),
    }),
    {
      name: 'recovery-path',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
