import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { useRecoveryPathStore } from '../store';

const ALTERNATIVES = [
  'Read a Book',
  'Spend time with family',
  'Talk to a Friend',
  'Exercise',
  'Meditate',
  'Journal',
  'Volunteer',
  'Explore Nature',
  'Write',
  'Cook',
  'Play a Sport',
  'Take a Walk',
  'Go to a Movie',
  'Go to a Concert',
] as const;

export type Alternative = (typeof ALTERNATIVES)[number];

export const Alternatives = () => {
  const { alternatives, updateAlternatives } = useRecoveryPathStore(
    useShallow((state) => ({
      alternatives: state.alternatives,
      updateAlternatives: state.updateAlternatives,
    })),
  );
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        Healthier Alternatives
      </h2>
      <p className='text-gray-600 mb-8'>
        What could you do instead of spending time on social media?
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {ALTERNATIVES.map((alternative) => (
          <Button
            key={alternative}
            variant={alternatives.includes(alternative) ? 'default' : 'outline'}
            onClick={() => updateAlternatives(alternative)}
          >
            {alternative}
          </Button>
        ))}
      </div>
    </div>
  );
};
