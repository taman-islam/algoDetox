import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { AlertCircle, CheckCircle, Coffee } from 'lucide-react';
import type { Task } from '@/app/(subroutes)/software-eng-day/task';
import {
  calculateTimeInMinutes,
  calculateCognitiveLoad,
  COGNITIVE_WEIGHTS,
  interpretCognitiveLoad,
} from '../utlis';
import { useState, useEffect } from 'react';

interface WorkloadOverviewProps {
  tasks: Task[];
}
const MAX_WORK_HOURS = 8;

export function WorkloadOverview({ tasks }: WorkloadOverviewProps) {
  const taskMinutes = tasks.reduce((total, task) => {
    return total + calculateTimeInMinutes(task.timeEstimate);
  }, 0);
  const [cognitiveLoad, setCognitiveLoad] = useState(0);
  const [cognitiveLoadColor, setCognitiveLoadColor] = useState('bg-green-600');
  const [cognitiveLoadMessage, setCognitiveLoadMessage] = useState('');

  useEffect(() => {
    const cl = calculateCognitiveLoad(tasks);
    const { textColor, message } = interpretCognitiveLoad(cl);
    setCognitiveLoadMessage(message);
    setCognitiveLoadColor(textColor);
    setCognitiveLoad(cl);
  }, [tasks]);

  const remainingMinutes = MAX_WORK_HOURS * 60 - taskMinutes;
  const capacityPercentage = (taskMinutes / MAX_WORK_HOURS / 60) * 100;

  const cognitiveLoadPercentage =
    (cognitiveLoad * 100) / COGNITIVE_WEIGHTS.MAX_COGNITIVE_LOAD;

  return (
    <Card className='mb-8'>
      <CardHeader>
        <CardTitle>Workload Overview</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Daily Capacity</h3>
            <Progress
              value={Math.min(capacityPercentage, 100)}
              className='mb-2'
            />
            <p className='text-sm mb-2'>
              Remaining: {(remainingMinutes / 60).toFixed(1)} hours (
              {(100 - capacityPercentage).toFixed(1)}%)
            </p>
            {capacityPercentage > 100 ? (
              <div className='flex items-center text-red-600 text-sm'>
                <AlertCircle className='mr-2 h-4 w-4' />
                <p>Over capacity limit</p>
              </div>
            ) : capacityPercentage >= 95 ? (
              <div className='flex items-center text-yellow-600 text-sm'>
                <AlertCircle className='mr-2 h-4 w-4' />
                <p>Don't overdo it!</p>
              </div>
            ) : (
              <div className='flex items-center text-green-600 text-sm'>
                <CheckCircle className='mr-2 h-4 w-4' />
                <p>Good to go!</p>
              </div>
            )}
          </div>
          <div>
            <h3 className='text-lg font-semibold mb-2'>Cognitive Load</h3>
            <Progress
              className={`mb-2 `}
              value={cognitiveLoadPercentage}
              color={`bg-${cognitiveLoadColor}`}
            />
            <p className='text-sm mb-2'>
              Load Score: {cognitiveLoadPercentage.toFixed(1)}%
            </p>
            <p className={`text-${cognitiveLoadColor} text-sm`}>
              {cognitiveLoadMessage}
            </p>
          </div>
        </div>
        <div className='flex items-center text-green-600 mt-4'>
          <Coffee className='mr-2 h-4 w-4' />
          <p className='text-sm'>Remember to take breaks during deep work!</p>
        </div>
      </CardContent>
    </Card>
  );
}
