'use client';

import { useState } from 'react';
import {
  Trash2,
  Smartphone,
  Mail,
  Slash,
  Book,
  Check,
  Slack,
  Chrome,
  Blocks,
  CreditCard,
  Gamepad2,
} from 'lucide-react';

export default function AdvancedDetoxPage() {
  const COLOR_CLASS = 'green-600';
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(5).fill(false),
  );

  // Toggle completion status of a step
  const toggleStep = (index: number) => {
    setCompletedSteps((prev) => {
      const newSteps = [...prev];
      newSteps[index] = !newSteps[index];
      return newSteps;
    });
  };

  const ICON_CLASS = `h-6 w-6 text-${COLOR_CLASS}`;

  const steps = [
    {
      icon: <Trash2 className={ICON_CLASS} />,
      content: 'Deactivate or permanently delete all social media accounts.',
    },
    {
      icon: <Chrome className={ICON_CLASS} />,
      content:
        'Use a privacy-focused browser like Firefox and avoid signing in.',
    },
    {
      icon: <Blocks className={ICON_CLASS} />,
      content:
        'Install an ad blocker extension (e.g., AdBlock, uBlock Origin, AdGuard).',
    },
    {
      icon: <Slash className={ICON_CLASS} />,
      content:
        'Block distracting websites using tools like Freedom, Cold Turkey, or News Feed Eradicator.',
    },
    {
      icon: <Smartphone className={ICON_CLASS} />,
      content: 'Remove social media and non-essential apps from your phone.',
    },
    {
      icon: <Mail className={ICON_CLASS} />,
      content:
        'Delete email apps from your personal phone to reduce distractions.',
    },
    {
      icon: <Slack className={ICON_CLASS} />,
      content:
        'Remove work-related apps like Slack and Microsoft Teams from your personal phone.',
    },
    {
      icon: <Gamepad2 className={ICON_CLASS} />,
      content: 'Remove gaming apps from your phone.',
    },
    {
      icon: <Book className={ICON_CLASS} />,
      content:
        'Replace screen time with offline activities like reading, exercise, or learning a new skill.',
    },
    {
      icon: <CreditCard className={ICON_CLASS} />,
      content:
        'Disable credit card auto-fill in browsers to prevent impulse purchases.',
    },
  ];

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
      {/* Hero Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className={`text-${COLOR_CLASS}`}>Advanced</span> Detox
              Strategy
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Break free completely by following these actionable steps. Check
              off each task as you complete it.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start p-6 rounded-lg shadow-sm border ${
                  completedSteps[index]
                    ? 'bg-green-50 border-green-200'
                    : 'bg-white border-gray-200'
                } transition-all`}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    completedSteps[index]
                      ? 'bg-green-600 border-green-600'
                      : 'bg-white border-purple-600'
                  }`}
                >
                  {completedSteps[index] && (
                    <Check className='h-4 w-4 text-white' />
                  )}
                </button>
                <div className='ml-4 flex items-start'>
                  <div className='flex-shrink-0'>{step.icon}</div>
                  <p
                    className={`ml-2 text-gray-700 ${
                      completedSteps[index] ? 'line-through' : ''
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
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Your Progress
          </h2>
          <p className='text-gray-600'>
            You've completed{' '}
            <span className='font-bold text-green-600'>
              {completedSteps.filter(Boolean).length}
            </span>{' '}
            out of {steps.length} steps.
          </p>
        </div>
      </section>
    </div>
  );
}
