'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Brain, Clock, ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Switch } from '@/components/ui/switch';

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [selectedHabits, setSelectedHabits] = useState<string[]>([]);
  const [customHabit, setCustomHabit] = useState('');
  const [setGoals, setSetGoals] = useState(false);
  const [dailyLimit, setDailyLimit] = useState<Record<string, number>>({});
  const [reductionTarget, setReductionTarget] = useState('');
  const [focusHours, setFocusHours] = useState({ start: '', end: '' });
  const [error, setError] = useState('');
  const router = useRouter();

  const digitalHabits = {
    'Social Media': ['Instagram', 'TikTok', 'Facebook', 'Twitter'],
    Streaming: ['YouTube', 'Netflix'],
    Messaging: ['WhatsApp', 'Discord', 'Slack'],
    Browsing: ['Reddit', 'News', 'Wikipedia'],
    Gaming: ['Mobile games', 'PC/console games'],
  };

  const handleHabitToggle = (habit: string) => {
    setSelectedHabits((prev) =>
      prev.includes(habit) ? prev.filter((h) => h !== habit) : [...prev, habit],
    );
  };

  const handleAddCustomHabit = () => {
    if (customHabit && !selectedHabits.includes(customHabit)) {
      setSelectedHabits((prev) => [...prev, customHabit]);
      setCustomHabit('');
    }
  };

  const handleSubmit = async () => {
    setError('');

    if (selectedHabits.length === 0) {
      setError('Please select at least one digital habit to track.');
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

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Welcome to algoDetox</CardTitle>
              <CardDescription>
                Let's start your journey to digital wellbeing
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <p>
                algoDetox helps you manage screen addiction through daily
                logging and reflection.
              </p>
              <div className='flex items-center justify-center'>
                <img
                  src='/placeholder.svg?height=200&width=300'
                  alt='Daily logging process visualization'
                  className='rounded-lg'
                />
              </div>
              <Button onClick={() => setStep(2)} className='w-full'>
                Get Started
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
          </Card>
        );
      case 2:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Select Digital Habits to Track</CardTitle>
              <CardDescription>
                Choose the categories you want to monitor
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              {Object.entries(digitalHabits).map(([category, apps]) => (
                <div key={category}>
                  <h3 className='text-lg font-semibold mb-2'>{category}</h3>
                  <div className='grid grid-cols-2 gap-2'>
                    {apps.map((app) => (
                      <div key={app} className='flex items-center space-x-2'>
                        <Checkbox
                          id={app}
                          checked={selectedHabits.includes(app)}
                          onCheckedChange={() => handleHabitToggle(app)}
                        />
                        <Label htmlFor={app}>{app}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className='flex items-center space-x-2'>
                <Input
                  placeholder='Add custom app/site'
                  value={customHabit}
                  onChange={(e) => setCustomHabit(e.target.value)}
                />
                <Button onClick={handleAddCustomHabit}>Add</Button>
              </div>
              <Button onClick={() => setStep(3)} className='w-full'>
                Next
                <ArrowRight className='ml-2 h-4 w-4' />
              </Button>
            </CardContent>
          </Card>
        );
      case 3:
        return (
          <Card>
            <CardHeader>
              <CardTitle>Goal Setting</CardTitle>
              <CardDescription>
                Optionally set screen time reduction goals
              </CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center space-x-2'>
                <Switch
                  id='set-goals'
                  checked={setGoals}
                  onCheckedChange={setSetGoals}
                />
                <Label htmlFor='set-goals'>
                  Set screen time reduction goals
                </Label>
              </div>
              {setGoals && (
                <>
                  <div className='space-y-2'>
                    <Label>Daily limits per category</Label>
                    {selectedHabits.map((habit) => (
                      <div key={habit} className='flex items-center space-x-2'>
                        <Label htmlFor={`limit-${habit}`}>{habit}</Label>
                        <Input
                          id={`limit-${habit}`}
                          type='number'
                          placeholder='Minutes'
                          value={dailyLimit[habit] || ''}
                          onChange={(e) =>
                            setDailyLimit({
                              ...dailyLimit,
                              [habit]: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                    ))}
                  </div>
                  <div className='space-y-2'>
                    <Label htmlFor='reduction-target'>Reduction target</Label>
                    <RadioGroup
                      value={reductionTarget}
                      onValueChange={setReductionTarget}
                    >
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='10' id='r10' />
                        <Label htmlFor='r10'>10% less usage</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='20' id='r20' />
                        <Label htmlFor='r20'>20% less usage</Label>
                      </div>
                      <div className='flex items-center space-x-2'>
                        <RadioGroupItem value='30' id='r30' />
                        <Label htmlFor='r30'>30% less usage</Label>
                      </div>
                    </RadioGroup>
                  </div>
                  <div className='space-y-2'>
                    <Label>Focus hours (block distractions)</Label>
                    <div className='flex items-center space-x-2'>
                      <Input
                        type='time'
                        value={focusHours.start}
                        onChange={(e) =>
                          setFocusHours({
                            ...focusHours,
                            start: e.target.value,
                          })
                        }
                      />
                      <span>to</span>
                      <Input
                        type='time'
                        value={focusHours.end}
                        onChange={(e) =>
                          setFocusHours({ ...focusHours, end: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </>
              )}
              <Button onClick={handleSubmit} className='w-full'>
                Complete Onboarding
              </Button>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Brain className='h-12 w-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          algoDetox Onboarding
        </h2>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <Progress value={(step / 3) * 100} className='mb-4' />
        {renderStep()}
        {error && (
          <Alert variant='destructive' className='mt-4'>
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  );
}
