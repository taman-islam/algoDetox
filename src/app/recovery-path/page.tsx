'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { websites } from '../platforms/websiteData';

export default function RecoveryPathPage() {
  const [step, setStep] = useState(1);
  const [usageData, setUsageData] = useState<{
    platforms: string[];
    reasons: string[];
    frequency: string;
    hoursPerDay: string;
    consequences: string[];
    alternatives: string[];
  }>({
    platforms: [],
    reasons: [],
    frequency: '',
    hoursPerDay: '',
    consequences: [],
    alternatives: [],
  });

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white py-16'>
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Progress Bar */}
        <div className='mb-8'>
          <div className='bg-gray-200 rounded-full h-2'>
            <div
              className='bg-blue-600 rounded-full h-2'
              style={{ width: `${(step / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Step 1: What Are You Using? */}
        {step === 1 && (
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
                    usageData.platforms.includes(platform.name)
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => {
                    setUsageData((prev) => ({
                      ...prev,
                      platforms: prev.platforms.includes(platform.name)
                        ? prev.platforms.filter((p) => p !== platform.name)
                        : [...prev.platforms, platform.name],
                    }));
                  }}
                >
                  {platform.name}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Why Are You Using? */}
        {step === 2 && (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Why Are You Using?
            </h2>
            <p className='text-gray-600 mb-8'>
              Select the reasons you use social media.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {[
                'Stay Connected',
                'Entertainment',
                'News',
                'Work',
                'FOMO',
                'Habit',
                'Loneliness',
                'Boredom',
              ].map((reason) => (
                <Button
                  key={reason}
                  variant={
                    usageData.reasons.includes(reason) ? 'default' : 'outline'
                  }
                  onClick={() => {
                    setUsageData((prev) => ({
                      ...prev,
                      reasons: prev.reasons.includes(reason)
                        ? prev.reasons.filter((r) => r !== reason)
                        : [...prev.reasons, reason],
                    }));
                  }}
                >
                  {reason}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: How Much Are You Using? */}
        {step === 3 && (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              How Much Are You Using?
            </h2>
            <p className='text-gray-600 mb-8'>
              How often do you check social media, and how many hours a day do
              you spend on it?
            </p>
            <div className='space-y-4'>
              <input
                type='text'
                placeholder='How many times do you check in a day? (e.g., 10)'
                className='w-full p-2 border border-gray-300 rounded-md'
                value={usageData.frequency}
                onChange={(e) =>
                  setUsageData((prev) => ({
                    ...prev,
                    frequency: e.target.value,
                  }))
                }
              />
              <input
                type='text'
                placeholder='How many hours a day do you spend on this platform?'
                className='w-full p-2 border border-gray-300 rounded-md'
                value={usageData.hoursPerDay}
                onChange={(e) =>
                  setUsageData((prev) => ({
                    ...prev,
                    hoursPerDay: e.target.value,
                  }))
                }
              />
            </div>
          </div>
        )}

        {/* Step 4: What Are the Consequences? */}
        {step === 4 && (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              What Are the Consequences?
            </h2>
            <p className='text-gray-600 mb-8'>
              Select the negative impacts you’re experiencing.
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {[
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
                'Reduced Self-Awareness',
              ].map((consequence) => (
                <Button
                  key={consequence}
                  variant={
                    usageData.consequences.includes(consequence)
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => {
                    setUsageData((prev) => ({
                      ...prev,
                      consequences: prev.consequences.includes(consequence)
                        ? prev.consequences.filter((c) => c !== consequence)
                        : [...prev.consequences, consequence],
                    }));
                  }}
                >
                  {consequence}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Step 5: Healthier Alternatives */}
        {step === 5 && (
          <div className='text-center'>
            <h2 className='text-2xl font-bold text-gray-900 mb-4'>
              Healthier Alternatives
            </h2>
            <p className='text-gray-600 mb-8'>
              What could you do instead of spending time on social media?
            </p>
            <div className='grid grid-cols-2 gap-4'>
              {[
                'Read a Book',
                'Spend time with family',
                'Talk to a Friend',
                'Exercise',
                'Meditate',
                'Spend Time with Family',
                'Learn a New Skill',
                'Journal',
                'Volunteer',
                'Explore Nature',
                'Write',
                'Cook',
                'Play a Sport',
                'Take a Walk',
                'Go to a Movie',
                'Go to a Concert',
              ].map((alternative) => (
                <Button
                  key={alternative}
                  variant={
                    usageData.alternatives.includes(alternative)
                      ? 'default'
                      : 'outline'
                  }
                  onClick={() => {
                    setUsageData((prev) => ({
                      ...prev,
                      alternatives: prev.alternatives.includes(alternative)
                        ? prev.alternatives.filter((a) => a !== alternative)
                        : [...prev.alternatives, alternative],
                    }));
                  }}
                >
                  {alternative}
                </Button>
              ))}
            </div>
          </div>
        )}

        {/* Navigation Buttons */}
        <div className='mt-8 flex justify-between'>
          {step > 1 && (
            <Button variant='outline' onClick={handleBack}>
              Back
            </Button>
          )}
          {step < 5 ? (
            <Button onClick={handleNext}>Next</Button>
          ) : (
            <Link href='/personalized-plan'>
              <Button>Get Your Personalized Plan</Button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
