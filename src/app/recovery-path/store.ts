import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { PlatformName } from '../platforms/websiteData';

export type RecoveryPathStep =
  | 'What'
  | 'Why'
  | 'How Much'
  | 'Consequences'
  | 'Alternatives'
  | 'Conclusion';

export const STEPS: RecoveryPathStep[] = [
  'What',
  'Why',
  'How Much',
  'Consequences',
  'Alternatives',
  'Conclusion',
];

type RecoveryPathState = {
  activeStep: RecoveryPathStep;
  selectedPlatforms: PlatformName[];
  setActiveStep: (step: RecoveryPathStep) => void;
  setSelectedPlatforms: (platforms: PlatformName[]) => void;
  addSelectedPlatform: (platform: PlatformName) => void;
  removeSelectedPlatform: (platform: PlatformName) => void;
  clearSelectedPlatforms: () => void;
  toggleSelectedPlatform: (platform: PlatformName) => void;
};

export const useRecoveryPathStore = create<RecoveryPathState>()(
  persist(
    (set, get) => ({
      activeStep: 'What',
      selectedPlatforms: [],
      setActiveStep: (step: RecoveryPathStep) => {
        console.log('hit:: ', step);
        set({ activeStep: step });
      },
      setSelectedPlatforms: (platforms: PlatformName[]) =>
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
