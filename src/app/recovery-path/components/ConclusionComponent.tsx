import { useShallow } from 'zustand/react/shallow';
import { useRecoveryPathStore } from '../store/uxStore';
import { Button } from '@/components/ui/button';
import { useUsageStore } from '../store/usageStore';

export const ConclusionComponent = () => {
  const { selectedPlatforms, results } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
      results: state.results,
    })),
  );
  const { usageDataByPlatform } = useUsageStore(
    useShallow((state) => ({
      usageDataByPlatform: state.usageDataByPlatform,
    })),
  );

  const updatePlatformUsefulness = (platform: string, usefulness: boolean) => {
    console.log('updatePlatformUsefulness', platform, usefulness);
  };

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        Evaluate Your Platforms
      </h2>
      <p className='text-gray-600 mb-8'>
        Based on your usage and experiences, decide whether each platform has
        been useful for you.
      </p>
      {selectedPlatforms.map((platform) => {
        const usageData = usageDataByPlatform[platform];
        const res = results[platform];
        return (
          <div key={platform} className='mb-8'>
            <h3 className='text-lg font-semibold mb-2'>{platform}</h3>
            <div className='text-left bg-blue-50 p-4 rounded-lg mb-4'>
              <p>
                <strong>Reasons</strong>:{' '}
                {Array.isArray(usageData?.reasons) &&
                usageData?.reasons?.length &&
                usageData?.reasons?.length > 0
                  ? (usageData?.reasons as string[]).join(', ')
                  : 'Unknown'}
              </p>
              <p>
                <strong>Usage</strong>:{' '}
                {usageData?.hoursPerDay
                  ? `${usageData.hoursPerDay} hours/day`
                  : 'Unknown'}
              </p>
              <p>
                <strong>Results</strong>:{' '}
                {res?.length && res.length > 0 ? res.join(', ') : 'Unknown'}
              </p>
            </div>
            <p className='text-gray-600 mb-4'>
              Based on these results, would you say that{' '}
              <span className='font-bold'>{platform}</span> has been useful for
              you?
            </p>
            <div className='flex justify-center gap-4'>
              <Button
                variant='outline'
                onClick={() => updatePlatformUsefulness(platform, true)}
              >
                Yes
              </Button>
              <Button
                variant='outline'
                onClick={() => updatePlatformUsefulness(platform, false)}
              >
                No
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
