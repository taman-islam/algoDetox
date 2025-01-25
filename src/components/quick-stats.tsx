import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface QuickStatsProps {
  appsBlocked: number;
  timeSaved: number;
  bestStreak: { app: string; days: number };
  averageStreak: number;
  daysSinceLastSlip: number;
}

export function QuickStats({
  appsBlocked,
  timeSaved,
  bestStreak,
  averageStreak,
  daysSinceLastSlip,
}: QuickStatsProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className='grid grid-cols-2 gap-4'>
          <div>
            <p className='text-sm font-medium'>Apps Blocked</p>
            <p className='text-2xl font-bold'>{appsBlocked}</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Time Saved</p>
            <p className='text-2xl font-bold'>{timeSaved} hrs</p>
          </div>
          <div>
            <p className='text-sm font-medium'>Best Streak</p>
            <p className='text-2xl font-bold'>
              {bestStreak.app}: {bestStreak.days} days
            </p>
          </div>
          <div>
            <p className='text-sm font-medium'>Average Streak</p>
            <p className='text-2xl font-bold'>
              {averageStreak.toFixed(1)} days
            </p>
          </div>
          <div className='col-span-2'>
            <p className='text-sm font-medium'>Days Since Last Slip-up</p>
            <p className='text-2xl font-bold'>{daysSinceLastSlip}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
