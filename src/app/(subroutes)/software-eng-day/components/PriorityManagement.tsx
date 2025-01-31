import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

interface Task {
  priority: 'high' | 'medium' | 'low';
  // Add other properties as needed
}

interface PriorityManagementProps {
  tasks: Task[];
}

export function PriorityManagement({ tasks }: PriorityManagementProps) {
  const highPriorityTasks = tasks.filter((task) => task.priority === 'high');
  const highPriorityPercentage =
    (highPriorityTasks.length / tasks.length) * 100 || 0;

  return (
    <Card className='mt-8'>
      <CardHeader>
        <CardTitle>Priority Management</CardTitle>
      </CardHeader>
      <CardContent>
        <p className='mb-2'>High Priority Tasks: {highPriorityTasks.length}</p>
        <Progress value={highPriorityPercentage} className='mb-4' />
        <p>
          {highPriorityPercentage.toFixed(1)}% of your tasks are high priority.
          Aim for a balanced distribution of priorities.
        </p>
        {highPriorityTasks.length > 3 && (
          <p className='mt-4 text-yellow-600'>
            Consider deferring some high priority tasks. It's challenging to
            effectively manage more than 2-3 high priority tasks per day.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
