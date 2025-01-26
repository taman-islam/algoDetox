import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { useRecoveryPathStore } from '../store/uxStore';
import { PlatformName } from '@/app/(subroutes)/platforms/websiteData';

const RESULTS = [
  'Found a job',
  'Found a friend',
  'Found a mentor',
  'Learned a new skill',
  'Gained confidence',
  'Improved mental health',
  'Discovered new hobbies',
  'Found inspiration',
  'Overcame a challenge',
  'Shared my creativity',
  'Received emotional support',
  'Improved communication skills',
  'Fought loneliness',
  'Gained new perspectives',
  'Achieved a personal goal',
  'Felt a sense of belonging',
  'Reduced stress through positive interactions',
] as const;
export type Result = (typeof RESULTS)[number];

export const ResultsComponent = () => {
  const { selectedPlatforms, results } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
      results: state.results,
    })),
  );

  // Handle empty state
  if (selectedPlatforms.length === 0) {
    return (
      <div className='text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-4'>
          No Platforms Selected
        </h2>
        <p className='text-gray-600'>
          Please go back and select at least one platform to view results.
        </p>
      </div>
    );
  }

  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        What results have you achieved?
      </h2>
      {selectedPlatforms.map((platform) => (
        <ResultByPlatform key={platform} platform={platform} />
      ))}
    </div>
  );
};

const ResultByPlatform = ({ platform }: { platform: PlatformName }) => {
  const { results, updateResults } = useRecoveryPathStore(
    useShallow((state) => ({
      results: state.results,
      updateResults: state.updateResults,
    })),
  );

  const { selectedPlatforms } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
    })),
  );

  return (
    <div className='mb-8'>
      <p className='text-gray-600 mb-4'>
        Select the results you’ve achieved on{' '}
        <span className='font-bold'>{platform}</span>
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        {RESULTS.map((result) => {
          const isSelected = results[platform]?.includes(result) ?? false;
          return (
            <Button
              key={result}
              variant={isSelected ? 'default' : 'outline'}
              onClick={() => updateResults(platform, result)}
              aria-pressed={isSelected}
              aria-label={`Select result: ${result}`}
              className='transition-colors duration-200 hover:bg-blue-100 active:bg-blue-200'
            >
              {result}
              {isSelected && <span className='ml-2'>✔️</span>}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
