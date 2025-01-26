import { PlatformName } from '@/app/platforms/websiteData';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type UsageData = {
  reasons: string[];
  frequency: number;
  hoursPerDay: number;
};

export interface UsageStore {
  usageDataByPlatform: Record<string, UsageData>;
  isPlatformUseful: { [key in PlatformName]?: boolean };
  updateUsageDataField: (
    platform: PlatformName,
    field: keyof UsageData,
    value: string | string[],
  ) => void;
  setIsPlatformUseful: (platform: PlatformName, value: boolean) => void;
}

export const useUsageStore = create<UsageStore>()(
  persist(
    (set) => ({
      usageDataByPlatform: {},
      isPlatformUseful: {},
      setIsPlatformUseful: (platform, value) => {
        set((state) => ({
          isPlatformUseful: { ...state.isPlatformUseful, [platform]: value },
        }));
      },
      updateUsageDataField: (platform, field, value) => {
        set((state) => {
          const usageData = state.usageDataByPlatform[platform] || {};
          return {
            usageDataByPlatform: {
              ...state.usageDataByPlatform,
              [platform]: { ...usageData, [field]: value },
            },
          };
        });
      },
    }),
    {
      name: 'usage-data',
    },
  ),
);
