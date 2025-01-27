'use client';

import { useState } from 'react';
import {
  Smartphone,
  Mail,
  Book,
  Check,
  Slack,
  Shield,
  Calendar,
  AlertCircle,
  StopCircle,
} from 'lucide-react';
import Link from 'next/link';

const COLOR_CLASS = 'purple-600';

const ICON_CLASS = `h-6 w-6 text-${COLOR_CLASS}`;

const committedSteps = [
  {
    icon: <Smartphone className={ICON_CLASS} />,
    content: 'Uninstall all social media apps from your phone.',
    details:
      'Removing apps from your phone eliminates easy access and reduces the temptation to scroll mindlessly.',
  },
  {
    icon: <Shield className={ICON_CLASS} />,
    content:
      'Use website blockers to restrict access to social media on your computer.',
    details:
      'Website blockers help you create a distraction-free environment, making it easier to focus on important tasks.',
  },
  {
    icon: <StopCircle className={ICON_CLASS} />,
    content:
      'Use News Feed Eradicator on your browser so you can still use some features but limit your exposure to infinite scrolling.',
    details:
      'News Feed Limiters help you create a distraction-free environment, making it easier to focus on important tasks.',
  },
  {
    icon: <Mail className={ICON_CLASS} />,
    content: 'Remove email apps from your personal phone.',
    details:
      'Deleting email apps from your personal phone reduces distractions and helps you separate work from personal life.',
  },
  {
    icon: <Slack className={ICON_CLASS} />,
    content:
      'Remove work-related apps like Slack and Microsoft Teams from your personal phone.',
    details:
      'Keeping work apps off your personal phone helps you maintain boundaries and avoid burnout.',
  },
  {
    icon: <Book className={ICON_CLASS} />,
    content:
      'Replace screen time with offline activities like reading or exercising.',
    details:
      'Replacing digital habits with offline activities improves mental health and helps you develop new, healthier routines.',
  },
  {
    icon: <Calendar className={ICON_CLASS} />,
    content:
      'Schedule specific times for checking email and work-related apps.',
    details:
      'Designating specific times for checking email and work apps helps you stay focused and avoid constant interruptions.',
  },
  {
    icon: <AlertCircle className={ICON_CLASS} />,
    content: (
      <span>
        If you still find yourself distracted, consider upgrading to the{' '}
        <Link
          href='/start-detox/advanced'
          className='font-medium text-blue-600 hover:text-blue-500'
        >
          Advanced Detox.
        </Link>{' '}
      </span>
    ),
    details:
      'The Committed Detox is effective for many, but if you need a more drastic change, the Advanced Detox may be the right choice.',
  },
];

export default function ModerateDetoxPage() {
  // State to track completed steps
  const [completedSteps, setCompletedSteps] = useState<boolean[]>(
    Array(committedSteps.length).fill(false),
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
            {committedSteps.map((step, index) => (
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
            out of {committedSteps.length} steps.
          </p>
        </div>
      </section>
    </div>
  );
}
