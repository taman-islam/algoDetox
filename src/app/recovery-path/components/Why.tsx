import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { PlatformName } from '../../platforms/websiteData';
import { useRecoveryPathStore } from '../store/uxStore';
import { useUsageStore } from '../store/usageStore';

const reasons = [
  'Stay Connected',
  'Entertainment',
  'News',
  'Work',
  'FOMO',
  'Habit',
  'Loneliness',
  'Boredom',
];

export const Why = () => {
  const { selectedPlatforms } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
    })),
  );
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        Why Are You Using Social Media?
      </h2>
      <div className='flex flex-col gap-4'>
        {selectedPlatforms.map((platform) => (
          <WhyPerPlatform key={platform} platform={platform} />
        ))}
      </div>
    </div>
  );
};

const WhyPerPlatform = ({ platform }: { platform: PlatformName }) => {
  const { usageDataByPlatform, updateUsageDataField } = useUsageStore(
    useShallow((state) => ({
      usageDataByPlatform: state.usageDataByPlatform,
      updateUsageDataField: state.updateUsageDataField,
    })),
  );
  const selectedReasons = usageDataByPlatform[platform]?.reasons ?? [];
  return (
    <>
      <p className='text-gray-600 mb-8'>
        Select the reasons you use <span className='font-bold'>{platform}</span>
      </p>
      <div className='grid grid-cols-2 gap-4 mb-8'>
        {reasons.map((reason) => (
          <Button
            key={reason}
            variant={selectedReasons.includes(reason) ? 'default' : 'outline'}
            onClick={() => {
              updateUsageDataField(
                platform,
                'reasons',
                selectedReasons.includes(reason)
                  ? selectedReasons.filter((r) => r !== reason)
                  : [...selectedReasons, reason],
              );
            }}
          >
            {reason}
          </Button>
        ))}
      </div>
    </>
  );
};
