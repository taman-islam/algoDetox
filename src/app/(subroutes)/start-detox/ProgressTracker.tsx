import { useStartDetoxStore } from './store';

export const ProgressTracker = ({ steps }: { steps: { uid: string }[] }) => {
  const { completedUids } = useStartDetoxStore();
  const stepUids = steps.map((step: any) => step.uid);
  const numCompleted = completedUids.filter((uid) =>
    stepUids.includes(uid),
  ).length;
  return (
    <>
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Your Progress
          </h2>
          <p className='text-gray-600'>
            You've completed{' '}
            <span className='font-bold text-green-600'>{numCompleted}</span> out
            of {steps.length} steps.
          </p>
        </div>
      </section>
    </>
  );
};
