import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { useRecoveryPathStore } from '../store/uxStore';

const CONSEQUENCES = [
  'Anxiety',
  'Depression',
  'Reduced Productivity',
  'Insomnia',
  'Loneliness',
  'FOMO',
  'Eye Strain',
  'Low Self-Esteem',
  'Hyper Stimulation',
  'Hyper Sexuality',
  'Reduced Sex Drive',
  'Reduced Self-Esteem',
  'Reduced Self-Worth',
  'Reduced Self-Confidence',
  'Reduced Self-Awareness',
  'Reduced Self-Control',
] as const;

export type Consequence = (typeof CONSEQUENCES)[number];

export const Consequences = () => {
  const { consequences, updateConsequences } = useRecoveryPathStore(
    useShallow((state) => ({
      consequences: state.consequences,
      updateConsequences: state.updateConsequences,
    })),
  );
  return (
    <div className='text-center'>
      <h2 className='text-2xl font-bold text-gray-900 mb-4'>
        What Are the Consequences?
      </h2>
      <p className='text-gray-600 mb-8'>
        Select the negative impacts you’re experiencing.
      </p>
      <div className='grid grid-cols-2 gap-4'>
        {CONSEQUENCES.map((consequence) => (
          <Button
            key={consequence}
            variant={consequences.includes(consequence) ? 'default' : 'outline'}
            onClick={() => {
              updateConsequences(consequence);
            }}
          >
            {consequence}
          </Button>
        ))}
      </div>
    </div>
  );
};
