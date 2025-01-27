'use client';

import { useState } from 'react';
import {
  Check,
  Slash,
  Clock,
  Monitor,
  Bell,
  Calendar,
  AlertCircle,
} from 'lucide-react';

import Link from 'next/link';

const COLOR_CLASS = 'blue-600';
const ICON_CLASS = `h-6 w-6 text-${COLOR_CLASS}`;

const easySteps = [
  {
    icon: <Slash className={ICON_CLASS} />,
    content: <span>Separate your work and personal devices.</span>,
    details:
      'Use a work-only device for work-related tasks and a personal device for personal use.',
  },
  {
    icon: <Clock className={ICON_CLASS} />,
    content: (
      <span>Set daily app usage timers for social media on your phone.</span>
    ),
    details:
      'Setting timers helps you become aware of how much time you spend on social media and encourages mindful usage.',
  },
  {
    icon: <Monitor className={ICON_CLASS} />,
    content: (
      <span>
        Use browser extensions to limit access to social media on your computer.
      </span>
    ),
    details:
      'Limiting access on your computer reduces temptation and helps you focus on productive tasks.',
  },
  {
    icon: <Bell className={ICON_CLASS} />,
    content: (
      <span>
        Turn off notifications for non-essential apps. Only allow important
        notifications from absolutely necessary apps.
      </span>
    ),
    details:
      'Notifications are a major source of distraction. Turning them off helps you stay focused and reduces interruptions.',
  },
  {
    icon: <Calendar className={ICON_CLASS} />,
    content: <span>Schedule specific times for checking social media.</span>,
    details:
      'Designating specific times for social media helps you avoid constant checking and creates a healthier routine.',
  },
  {
    icon: <AlertCircle className={ICON_CLASS} />,
    content: (
      <span>
        If you find yourself unable to stick to these limits, consider upgrading
        to the{' '}
        <Link
          className='font-medium text-blue-600 hover:text-blue-500'
          href='/start-detox/committed'
        >
          Committed Detox
        </Link>
        .
      </span>
    ),
    details:
      'The Easy Detox is a starting point, but if you struggle to stay within limits, a more committed approach may be necessary.',
  },
];

export default function ModerateDetoxPage() {
  // State to track completed steps
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

  return (
    <div className='min-h-screen bg-gradient-to-b from-purple-50 to-white'>
      {/* Hero Section */}
      <section className='py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              <span className={`text-${COLOR_CLASS}`}>Easy</span> Detox Strategy
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Break free from social media addiction by following these
              actionable steps. Check off each task as you complete it.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className='py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='space-y-6'>
            {easySteps.map((step, index) => (
              <div
                key={index}
                className={`flex items-start p-6 rounded-lg shadow-sm border ${
                  completedSteps[index]
                    ? 'bg-purple-50 border-purple-200'
                    : 'bg-white border-gray-200'
                } transition-all`}
              >
                <button
                  onClick={() => toggleStep(index)}
                  className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                    completedSteps[index]
                      ? 'bg-purple-600 border-purple-600'
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
            <span className='font-bold text-purple-600'>
              {completedSteps.filter(Boolean).length}
            </span>{' '}
            out of {easySteps.length} steps.
          </p>
        </div>
      </section>
    </div>
  );
}
