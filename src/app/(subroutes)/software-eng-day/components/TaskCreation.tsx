import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  taskLabels,
  type TaskLabel,
} from '@/app/(subroutes)/software-eng-day/task';
import type { Task } from '@/app/(subroutes)/software-eng-day/task';
import { TaskList } from './TaskList';
import { useDailyStore } from '../dailyStore';

export function TaskCreation() {
  const { addTask } = useDailyStore();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timeEstimate, setTimeEstimate] = useState('1h');
  const [priority, setPriority] = useState<Task['priority']>('medium');
  const [label, setLabel] = useState<TaskLabel>(taskLabels[0].value);
  const [energyRequirement, setEnergyRequirement] =
    useState<Task['energyRequirement']>('medium');
  const [contextSwitchCost, setContextSwitchCost] =
    useState<Task['contextSwitchCost']>('medium');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      timeEstimate,
      priority,
      label,
      completed: false,
      energyRequirement,
      contextSwitchCost,
      recoveryTime: 0,
      batchable: true,
    };
    addTask(newTask);
    setTitle('');
    setDescription('');
    setTimeEstimate('1h');
    setPriority('medium');
    setLabel(taskLabels[0].value);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-4'>
      <div>
        <Label htmlFor='title'>Task Title</Label>
        <Input
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          maxLength={50}
          required
          className='mt-1'
        />
      </div>
      <div>
        <Label htmlFor='timeEstimate'>Time Estimation</Label>
        <Select value={timeEstimate} onValueChange={setTimeEstimate}>
          <SelectTrigger id='timeEstimate' className='mt-1'>
            <SelectValue placeholder='Select time estimate' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='30m'>30 minutes</SelectItem>
            <SelectItem value='1h'>1 hour</SelectItem>
            <SelectItem value='2h'>2 hours</SelectItem>
            <SelectItem value='4h'>4 hours</SelectItem>
            <SelectItem value='custom'>Custom</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor='priority'>Priority/Impact Level</Label>
        <Select
          value={priority}
          onValueChange={(value) => setPriority(value as Task['priority'])}
        >
          <SelectTrigger id='priority' className='mt-1'>
            <SelectValue placeholder='Select priority' />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value='high'>High</SelectItem>
            <SelectItem value='medium'>Medium</SelectItem>
            <SelectItem value='low'>Low</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor='label'>Task Type & Energy</Label>
        <Select
          value={label}
          onValueChange={(value) => {
            setLabel(value as TaskLabel);
            setEnergyRequirement(
              (taskLabels.find((t) => t.value === value)?.energyRequirement ??
                'medium') as 'high' | 'medium' | 'low',
            );
          }}
        >
          <SelectTrigger id='label' className='mt-1'>
            <SelectValue placeholder='Select task type and energy' />
          </SelectTrigger>
          <SelectContent>
            {taskLabels.map((type) => (
              <SelectItem key={type.value} value={type.value}>
                {type.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div>
        <Label htmlFor='description'>Brief Description</Label>
        <Textarea
          id='description'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          maxLength={200}
          className='mt-1'
        />
        <p className='text-sm text-gray-500 mt-1'>
          {description.length}/200 characters
        </p>
      </div>
      <Button type='submit' className='w-full'>
        Add Task
      </Button>
    </form>
  );
}
