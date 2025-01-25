'use client';

import { useState } from 'react';
import { Brain, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SocialMediaSelector } from '@/components/social-media-selector';
import { DetoxStreaks } from '@/components/detox-streaks';
import { DailyLog } from '@/components/daily-log';
import { QuickStats } from '@/components/quick-stats';
import { ReflectionPrompt } from '@/components/reflection-prompt';
import { UrgeInterventionModal } from '@/components/urge-intervention-modal';
import { SocialMediaEducation } from '@/components/social-media-education';

// Mock data for demonstration
const initialStreaks = [
  { platform: 'Instagram', days: 15 },
  { platform: 'TikTok', days: 10 },
  { platform: 'Twitter', days: 7 },
  { platform: 'Facebook', days: 5 },
  { platform: 'YouTube', days: 3 },
];

const initialStats = {
  platformsDetoxing: 5,
  totalDetoxDays: 40,
  bestStreak: { platform: 'Instagram', days: 15 },
  averageStreak: 8,
  daysSinceLastSlip: 3,
};

export default function Dashboard() {
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);
  const [streaks, setStreaks] = useState(initialStreaks);
  const [stats, setStats] = useState(initialStats);
  const [urgeModalOpen, setUrgeModalOpen] = useState(false);

  const handlePlatformSelection = (platforms: string[]) => {
    setSelectedPlatforms(platforms);
    // Here you would typically update streaks and stats based on selected platforms
  };

  const handleSlipEntry = (platform: string) => {
    setStreaks(
      streaks.map((streak) =>
        streak.platform === platform ? { ...streak, days: 0 } : streak,
      ),
    );
    // Update stats accordingly
    setStats({
      ...stats,
      daysSinceLastSlip: 0,
      averageStreak:
        streaks.reduce((acc, streak) => acc + streak.days, 0) / streaks.length,
    });
  };

  const handleLogEntry = (
    platform: string,
    duration: number,
    impact: string,
    feeling: string,
  ) => {
    // Here you would typically send this data to your backend
    console.log(
      `Logged ${platform} usage: ${duration} minutes, Impact: ${impact}, Feeling: ${feeling}`,
    );
  };

  const handleSaveReflection = (reflection: string) => {
    // Here you would typically send this data to your backend
    console.log(`Saved reflection: ${reflection}`);
  };

  const handleUrgeIntervention = (data: {
    urge: string;
    suggestion: string;
    helpful: boolean;
    note: string;
  }) => {
    // Here you would typically send this data to your backend
    console.log('Urge intervention data:', data);
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='flex justify-center mb-6'>
          <Brain className='h-12 w-12 text-blue-600' />
        </div>
        <h2 className='text-center text-3xl font-extrabold text-gray-900 mb-8'>
          AlgoDetox: Your Social Media Detox Dashboard
        </h2>

        <div className='mb-8'>
          <SocialMediaSelector onSave={handlePlatformSelection} />
        </div>

        <div className='mb-8'>
          <Button
            size='lg'
            className='w-full bg-red-600 hover:bg-red-700 text-white'
            onClick={() => setUrgeModalOpen(true)}
          >
            <AlertCircle className='mr-2 h-5 w-5' />
            Feeling Urge to Use Social Media
          </Button>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <DetoxStreaks streaks={streaks} onSlipEntry={handleSlipEntry} />
          <DailyLog platforms={selectedPlatforms} onLogEntry={handleLogEntry} />
        </div>

        {/* <div className='mb-8'>
          <QuickStats {...stats} />
        </div> */}

        <div className='mb-8'>
          <ReflectionPrompt onSaveReflection={handleSaveReflection} />
        </div>

        <div className='mb-8'>
          <SocialMediaEducation />
        </div>

        <UrgeInterventionModal
          open={urgeModalOpen}
          onOpenChange={setUrgeModalOpen}
          onComplete={handleUrgeIntervention}
        />
      </div>
    </div>
  );
}
