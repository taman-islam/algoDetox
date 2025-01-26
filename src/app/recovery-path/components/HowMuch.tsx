import { PlatformName } from '../../platforms/websiteData';
import { useRecoveryPathStore } from '../store/uxStore';
import { useShallow } from 'zustand/react/shallow';
import { useUsageStore } from '../store/usageStore';

export const HowMuch = () => {
  const { selectedPlatforms } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
    })),
  );
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        How Much Are You Using?
      </h2>
      <div className='flex flex-col gap-4'>
        {selectedPlatforms.map((platform) => (
          <HowMuchPerPlatform key={platform} platform={platform} />
        ))}
      </div>
    </div>
  );
};

const HowMuchPerPlatform = ({ platform }: { platform: PlatformName }) => {
  const { usageDataByPlatform, updateUsageDataField } = useUsageStore(
    useShallow((state) => ({
      usageDataByPlatform: state.usageDataByPlatform,
      updateUsageDataField: state.updateUsageDataField,
    })),
  );
  return (
    <>
      <p className='text-gray-600 mb-8'>
        How often do you check <span className='font-bold'>{platform}</span>,
        and how many hours a day do you spend on it?
      </p>
      <div className='space-y-4 mb-8'>
        <input
          type='number'
          placeholder={`How many times do you check ${platform} in a day? (e.g., 10)`}
          className='w-full p-2 border border-gray-300 rounded-md'
          value={usageDataByPlatform[platform]?.frequency || ''}
          onChange={(e) =>
            updateUsageDataField(platform, 'frequency', e.target.value)
          }
        />
        <input
          type='number'
          placeholder={`How many hours a day do you spend on ${platform}?`}
          className='w-full p-2 border border-gray-300 rounded-md'
          value={usageDataByPlatform[platform]?.hoursPerDay || ''}
          onChange={(e) =>
            updateUsageDataField(platform, 'hoursPerDay', e.target.value)
          }
        />
      </div>
    </>
  );
};
