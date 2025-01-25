'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Brain, CalendarIcon } from 'lucide-react';
import { format } from 'date-fns';

// Mock data for demonstration
const logData = [
  {
    date: '2023-05-01',
    app: 'Instagram',
    duration: 45,
    feeling: 'bad',
    note: 'Mindless scrolling before bed',
  },
  {
    date: '2023-05-01',
    app: 'YouTube',
    duration: 30,
    feeling: 'good',
    note: 'Watched an educational video',
  },
  {
    date: '2023-05-02',
    app: 'Twitter',
    duration: 20,
    feeling: 'necessary',
    note: 'Checked work-related updates',
  },
  {
    date: '2023-05-02',
    app: 'Netflix',
    duration: 120,
    feeling: 'bad',
    note: 'Binge-watched a new series',
  },
  {
    date: '2023-05-03',
    app: 'LinkedIn',
    duration: 15,
    feeling: 'good',
    note: 'Networking and job search',
  },
];

export default function Logs() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(
    new Date(),
  );
  const [selectedApp, setSelectedApp] = useState<string | undefined>(undefined);

  const filteredLogs = logData.filter((log) => {
    const dateMatch = selectedDate
      ? log.date === format(selectedDate, 'yyyy-MM-dd')
      : true;
    const appMatch = selectedApp ? log.app === selectedApp : true;
    return dateMatch && appMatch;
  });

  const uniqueApps = Array.from(new Set(logData.map((log) => log.app)));

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto w-full'>
        <div className='flex justify-center mb-6'>
          <Brain className='h-12 w-12 text-blue-600' />
        </div>
        <h2 className='text-center text-3xl font-extrabold text-gray-900 mb-8'>
          Your Usage Logs
        </h2>

        <Card className='mb-8'>
          <CardHeader>
            <CardTitle>Filter Logs</CardTitle>
            <CardDescription>
              Select a date and app to filter your logs
            </CardDescription>
          </CardHeader>
          <CardContent className='flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4'>
            <div className='flex-1'>
              <Calendar
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
                className='rounded-md border'
              />
            </div>
            <div className='flex-1'>
              <Select value={selectedApp} onValueChange={setSelectedApp}>
                <SelectTrigger>
                  <SelectValue placeholder='Select an app' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={''}>All Apps</SelectItem>
                  {uniqueApps.map((app) => (
                    <SelectItem key={app} value={app}>
                      {app}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className='space-y-4'>
          {filteredLogs.map((log, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className='flex justify-between items-center'>
                  <span>{log.app}</span>
                  <span className='text-sm font-normal text-gray-500'>
                    <CalendarIcon className='inline-block mr-1 h-4 w-4' />
                    {log.date}
                  </span>
                </CardTitle>
                <CardDescription>
                  Duration: {log.duration} minutes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className='mb-2'>
                  Feeling:{' '}
                  <span
                    className={`font-semibold ${
                      log.feeling === 'good'
                        ? 'text-green-600'
                        : log.feeling === 'bad'
                        ? 'text-red-600'
                        : 'text-yellow-600'
                    }`}
                  >
                    {log.feeling}
                  </span>
                </p>
                <p className='text-gray-600'>{log.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredLogs.length === 0 && (
          <Card>
            <CardContent className='text-center py-8'>
              <p className='text-gray-500'>
                No logs found for the selected filters.
              </p>
            </CardContent>
          </Card>
        )}

        <div className='mt-8 text-center'>
          <Button onClick={() => window.history.back()}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    </div>
  );
}
