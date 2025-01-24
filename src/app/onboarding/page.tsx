'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Brain } from 'lucide-react';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Onboarding() {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([]);
  const [primaryPlatforms, setPrimaryPlatforms] = useState<string[]>([]);
  const [screenTimeGoal, setScreenTimeGoal] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const mentalHealthIssues = [
    'Stress scrolling',
    'Procrastination',
    'Sleep issues',
    'Anxiety',
    'Depression',
    'Low self-esteem',
    'FOMO (Fear of Missing Out)',
    'Difficulty concentrating',
    'Comparison and self-esteem issues',
  ];

  const platforms = [
    'Facebook',
    'Instagram',
    'Twitter',
    'TikTok',
    'YouTube',
    'LinkedIn',
    'Snapchat',
    'Reddit',
  ];

  const handleIssueToggle = (issue: string) => {
    setSelectedIssues((prev) =>
      prev.includes(issue) ? prev.filter((i) => i !== issue) : [...prev, issue],
    );
  };

  const handlePlatformToggle = (platform: string) => {
    setPrimaryPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform],
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (selectedIssues.length === 0) {
      setError('Please select at least one issue.');
      return;
    }

    if (primaryPlatforms.length === 0) {
      setError('Please select at least one platform to detox from.');
      return;
    }

    if (!screenTimeGoal) {
      setError('Please set a screen time reduction goal.');
      return;
    }

    // Here you would typically call your API to save the user's onboarding data
    // For demonstration, we'll just simulate a successful save
    try {
      // Simulated API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Redirect to dashboard after successful onboarding
      router.push('/dashboard');
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Brain className='h-12 w-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Personalize Your Detox Journey
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Let's tailor your experience to help you achieve your digital
          wellbeing goals.
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10'>
          <form className='space-y-6' onSubmit={handleSubmit}>
            <div>
              <Label className='text-lg font-semibold'>
                Select your challenges:
              </Label>
              <div className='mt-2 space-y-2'>
                {mentalHealthIssues.map((issue) => (
                  <div key={issue} className='flex items-center'>
                    <Checkbox
                      id={issue}
                      checked={selectedIssues.includes(issue)}
                      onCheckedChange={() => handleIssueToggle(issue)}
                    />
                    <Label
                      htmlFor={issue}
                      className='ml-2 text-sm text-gray-900'
                    >
                      {issue}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className='text-lg font-semibold'>
                Select platforms to detox from:
              </Label>
              <div className='mt-2 space-y-2'>
                {platforms.map((platform) => (
                  <div key={platform} className='flex items-center'>
                    <Checkbox
                      id={platform}
                      checked={primaryPlatforms.includes(platform)}
                      onCheckedChange={() => handlePlatformToggle(platform)}
                    />
                    <Label
                      htmlFor={platform}
                      className='ml-2 text-sm text-gray-900'
                    >
                      {platform}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <Label className='text-lg font-semibold'>
                Set your screen time reduction goal:
              </Label>
              <Select onValueChange={setScreenTimeGoal} value={screenTimeGoal}>
                <SelectTrigger className='w-full mt-2'>
                  <SelectValue placeholder='Select your goal' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='10'>Reduce by 10%</SelectItem>
                  <SelectItem value='25'>Reduce by 25%</SelectItem>
                  <SelectItem value='50'>Reduce by 50%</SelectItem>
                  <SelectItem value='75'>Reduce by 75%</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Button type='submit' className='w-full'>
                Start My Detox Journey
              </Button>
            </div>

            {error && (
              <Alert variant='destructive' className='mt-4'>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
