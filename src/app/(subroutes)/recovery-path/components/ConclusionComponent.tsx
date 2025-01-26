import { useShallow } from 'zustand/react/shallow';
import { useRecoveryPathStore } from '../store/uxStore';
import { Button } from '@/components/ui/button';
import { useUsageStore } from '../store/usageStore';
import { PlatformName } from '@/app/(subroutes)/platforms/websiteData';

export const ConclusionComponent = () => {
  const { selectedPlatforms, results } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
      results: state.results,
    })),
  );
  const { usageDataByPlatform, isPlatformUseful, setIsPlatformUseful } =
    useUsageStore(
      useShallow((state) => ({
        usageDataByPlatform: state.usageDataByPlatform,
        isPlatformUseful: state.isPlatformUseful,
        setIsPlatformUseful: state.setIsPlatformUseful,
      })),
    );

  const updatePlatformUsefulness = (
    platform: PlatformName,
    usefulness: boolean,
  ) => {
    setIsPlatformUseful(platform, usefulness);
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
                variant={isPlatformUseful[platform] ? 'default' : 'outline'}
                onClick={() => updatePlatformUsefulness(platform, true)}
              >
                Yes
              </Button>
              <Button
                variant={isPlatformUseful[platform] ? 'outline' : 'default'}
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
