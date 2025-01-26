import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import { PlatformName } from '../platforms/websiteData';

export const STEPS = [
  'What',
  'Why',
  'How Much',
  'Results',
  'Consequences',
  'Alternatives',
  'Conclusion',
] as const;

export type RecoveryPathStep = (typeof STEPS)[number];

export type UsageData = {
  reasons: string[];
  frequency: string;
  hoursPerDay: string;
};

type RecoveryPathState = {
  activeStep: RecoveryPathStep;
  usageDataByPlatform: {
    [key in PlatformName]?: UsageData;
  };
  selectedPlatforms: PlatformName[];
  consequences: string[];
  alternatives: string[];
  results: {
    [key in PlatformName]?: string[];
  };
  setActiveStep: (step: RecoveryPathStep) => void;
  toggleSelectedPlatform: (platform: PlatformName) => void;
  setSelectedPlatforms: (platforms: PlatformName[]) => void;
  updateUsageDataField: (
    platform: PlatformName,
    field: keyof UsageData,
    value: string,
  ) => void;
  updateConsequences: (consequence: string) => void;
  updateAlternatives: (alternative: string) => void;
  updateResults: (platform: PlatformName, result: string) => void;
};

export const useRecoveryPathStore = create<RecoveryPathState>()(
  persist(
    (set, get) => ({
      activeStep: STEPS[0],
      usageDataByPlatform: {},
      selectedPlatforms: [],
      consequences: [],
      alternatives: [],
      results: {},
      setActiveStep: (step: RecoveryPathStep) => {
        set({ activeStep: step });
      },
      setSelectedPlatforms: (platforms: PlatformName[]) =>
        set({ selectedPlatforms: platforms }),

      toggleSelectedPlatform: (platform: PlatformName) =>
        set((state) => ({
          selectedPlatforms: state.selectedPlatforms.includes(platform)
            ? state.selectedPlatforms.filter((p) => p !== platform)
            : [...state.selectedPlatforms, platform],
        })),
      updateUsageDataField: (
        platform: PlatformName,
        field: keyof UsageData,
        value: string,
      ) =>
        set((state) => ({
          usageDataByPlatform: {
            ...get().usageDataByPlatform,
            [platform]: {
              ...get().usageDataByPlatform[platform],
              [field]: value,
            },
          },
        })),
      updateConsequences: (consequence: string) =>
        set((state) => ({
          consequences: state.consequences.includes(consequence)
            ? state.consequences.filter((c) => c !== consequence)
            : [...state.consequences, consequence],
        })),
      updateAlternatives: (alternative: string) =>
        set((state) => ({
          alternatives: state.alternatives.includes(alternative)
            ? state.alternatives.filter((a) => a !== alternative)
            : [...state.alternatives, alternative],
        })),
      updateResults: (platform: PlatformName, result: string) =>
        set((state) => ({
          results: {
            ...get().results,
            [platform]: [...(get().results[platform] || []), result],
          },
        })),
    }),
    {
      name: 'recovery-path',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
