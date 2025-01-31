'use client';

import { TaskCreation } from './components/TaskCreation';
import { TaskList } from './components/TaskList';
import { WorkloadOverview } from './components/WorkloadOverview';
import { PriorityManagement } from './components/PriorityManagement';
import { useDailyStore } from './dailyStore';

export default function EnhancedTaskManagement() {
  const { taskStore } = useDailyStore();

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-8'>
        Enhanced Task Management System
      </h1>
      <WorkloadOverview tasks={taskStore.tasks} />

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <TaskCreation />
        </div>
        <div>
          <PriorityManagement tasks={taskStore.tasks} />
          <TaskList tasks={taskStore.tasks} />
        </div>
      </div>
    </div>
  );
}
