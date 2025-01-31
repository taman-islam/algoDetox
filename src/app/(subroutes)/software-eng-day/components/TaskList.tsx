import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Checkbox } from '@/components/ui/checkbox';
import type { Task } from '@/app/(subroutes)/software-eng-day/task';
import { taskLabels } from '@/app/(subroutes)/software-eng-day/task';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';
import { useDailyStore } from '../dailyStore';

interface TaskListProps {
  tasks: Task[];
}

export function TaskList({ tasks }: TaskListProps) {
  const { removeTask } = useDailyStore.getState();

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getEnergyColor = (energy: string) => {
    switch (energy) {
      case 'high':
        return 'bg-purple-500';
      case 'medium':
        return 'bg-blue-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task List</CardTitle>
      </CardHeader>
      <CardContent>
        {tasks.map((task) => (
          <div key={task.id} className='flex items-center space-x-2 mb-4'>
            <Checkbox id={`task-${task.id}`} />
            <div>
              <label htmlFor={`task-${task.id}`} className='font-medium'>
                {task.title}
              </label>
              <div className='flex space-x-2 mt-1'>
                <Badge variant='outline'>{task.timeEstimate}</Badge>
                <Badge className={getPriorityColor(task.priority)}>
                  {task.priority}
                </Badge>
                <Badge
                  className={getEnergyColor(
                    taskLabels.find((l) => l.value === task.label)
                      ?.energyRequirement || 'medium',
                  )}
                >
                  {taskLabels.find((l) => l.value === task.label)?.label}
                </Badge>
              </div>
              <div className='flex space-x-2'>
                <Button
                  size='icon'
                  variant='ghost'
                  onClick={() => removeTask(task)}
                  title='Delete task'
                >
                  <Trash2 className='h-4 w-4' />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
