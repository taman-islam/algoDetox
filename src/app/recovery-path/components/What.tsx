import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { websites } from '../../platforms/websiteData';
import { useRecoveryPathStore } from '../store/uxStore';

export const What = () => {
  const { selectedPlatforms, toggleSelectedPlatform } = useRecoveryPathStore(
    useShallow((state) => ({
      selectedPlatforms: state.selectedPlatforms,
      toggleSelectedPlatform: state.toggleSelectedPlatform,
    })),
  );
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        What Are You Using?
      </h2>
      <p className='text-gray-600 mb-8'>
        Select the social media platforms you use most often.
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {websites.map((platform) => (
          <Button
            key={platform.name}
            variant={
              selectedPlatforms.includes(platform.name) ? 'default' : 'outline'
            }
            onClick={() => {
              toggleSelectedPlatform(platform.name);
            }}
          >
            {platform.name}
          </Button>
        ))}
      </div>
    </div>
  );
};
