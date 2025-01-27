'use client';

import { Check } from 'lucide-react';
import { useStartDetoxStore } from '../store';
import { useShallow } from 'zustand/react/shallow';
import { ProgressTracker } from '../ProgressTracker';
import { COMMITTED_STEPS } from '../Steps';

const COLOR_CLASS = 'purple-600';

export default function ModerateDetoxPage() {
  const { completedUids, toggleCompletedUid } = useStartDetoxStore(
    useShallow((state) => ({
      completedUids: state.completedUids,
      toggleCompletedUid: state.toggleCompletedUid,
    })),
  );

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
      {/* Hero Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className={`text-${COLOR_CLASS}`}>Committed</span> Detox
              Strategy
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Take control of your digital habits with these actionable steps.
              Check off each task as you complete it.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            {COMMITTED_STEPS.map((step, index) => (
              <div
                key={index}
                className={`flex items-start p-6 rounded-lg shadow-sm border ${
                  completedUids.includes(step.uid)
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-gray-200'
                } transition-all`}
              >
                <button
                  onClick={() => toggleCompletedUid(step.uid)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    completedUids.includes(step.uid)
                      ? 'bg-purple-600 border-purple-600'
                      : 'bg-white border-purple-600'
                  }`}
                >
                  {completedUids.includes(step.uid) && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                <div className='ml-4 flex items-start'>
                  <div className='flex-shrink-0'>{step.icon}</div>
                  <p
                    className={`ml-2 text-gray-700 ${
                      completedUids.includes(step.uid) ? 'line-through' : ''
                    }`}
                  >
                    {step.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Progress Section */}
      <ProgressTracker steps={COMMITTED_STEPS} />
    </div>
  );
}
