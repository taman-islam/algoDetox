'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useShallow } from 'zustand/react/shallow';
import { RecoveryPathStep, STEPS, useRecoveryPathStore } from './store';
import { Why } from './components/Why';
import { What } from './components/What';
import { HowMuch } from './components/HowMuch';
import { Consequences } from './components/Consequences';
import { Alternatives } from './components/Alternatives';
import { memo } from 'react';

export function RecoveryPathContainer() {
  const { activeStep } = useRecoveryPathStore(
    useShallow((state) => ({
      activeStep: state.activeStep,
    })),
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        <ProgressBar activeStep={activeStep} />
        {activeStep === 'What' && <What />}
        {activeStep === 'Why' && <Why />}
        {activeStep === 'How Much' && <HowMuch />}
        {activeStep === 'Consequences' && <Consequences />}
        {activeStep === 'Alternatives' && <Alternatives />}
        <NavigationButtons />
      </div>
    </div>
  );
}

const NavigationButtons = () => {
  const { activeStep, setActiveStep } = useRecoveryPathStore(
    useShallow((state) => ({
      activeStep: state.activeStep,
      setActiveStep: state.setActiveStep,
    })),
  );
  return (
    <div className='mt-8 flex justify-between'>
      {activeStep != STEPS[0] && (
        <Button
          variant='outline'
          onClick={() => setActiveStep(STEPS[STEPS.indexOf(activeStep) - 1])}
        >
          Back
        </Button>
      )}
      {activeStep != STEPS[STEPS.length - 1] ? (
        <Button
          onClick={() => setActiveStep(STEPS[STEPS.indexOf(activeStep) + 1])}
        >
          Next
        </Button>
      ) : (
        <Link href='/personalized-plan'>
          <Button>Get Your Personalized Plan</Button>
        </Link>
      )}
    </div>
  );
};

const ProgressBar = memo(({ activeStep }: { activeStep: RecoveryPathStep }) => {
  return (
    <div className='mb-8'>
      <div className='bg-gray-200 rounded-full h-2'>
        <div
          className='bg-blue-600 rounded-full h-2'
          style={{
            width: `${((STEPS.indexOf(activeStep) + 1) * 100) / STEPS.length}%`,
          }}
        ></div>
      </div>
    </div>
  );
});
