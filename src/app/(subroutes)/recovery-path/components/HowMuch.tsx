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
          min={0}
          max={100}
          step={1}
          placeholder={`How many times do you check ${platform} in a day? (e.g., 10)`}
          className='w-full p-2 border border-gray-300 rounded-md'
          value={usageDataByPlatform[platform]?.frequency || 0}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            if (value < 0) {
              alert('Please enter a positive number or 0');
            } else {
              updateUsageDataField(platform, 'frequency', value.toString());
            }
          }}
        />
        <input
          type='number'
          min={0}
          max={24}
          step={0.1}
          placeholder={`How many hours a day do you spend on ${platform}?`}
          className='w-full p-2 border border-gray-300 rounded-md'
          value={usageDataByPlatform[platform]?.hoursPerDay || 0}
          onChange={(e) => {
            const value = parseFloat(e.target.value);
            if (value < 0) {
              alert('Please enter a positive number or 0');
            } else if (value > 24) {
              alert('Please enter a number less than 24');
            } else {
              updateUsageDataField(platform, 'hoursPerDay', value.toString());
            }
          }}
        />
      </div>
    </>
  );
};
