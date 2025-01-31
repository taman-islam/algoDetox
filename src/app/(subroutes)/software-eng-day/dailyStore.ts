import { create } from 'zustand';
import type { Task } from './task';
import { persist, createJSONStorage } from 'zustand/middleware';
import { get } from 'http';

interface DailyStore {
  taskStore: {
    tasks: Task[];
    date: string; // yy-mm-dd
  };
  cognitiveLoad: number;
  capacityPercentage: number;
  remainingMinutes: number;
  addTask: (task: Task) => void;
  removeTask: (task: Task) => void;
  __maybeClearStore: () => void;
}

const formatDate = (date: Date) => {
  return date.toISOString().slice(2).split('T')[0];
};

export const useDailyStore = create<DailyStore>()(
  persist(
    (set, get) => ({
      taskStore: {
        tasks: [],
        date: formatDate(new Date()),
      },
      cognitiveLoad: 0,
      capacityPercentage: 0,
      remainingMinutes: 0,
      __maybeClearStore: () => {
        const today = formatDate(new Date());
        if (today !== get().taskStore.date) {
          set({
            taskStore: {
              tasks: [],
              date: today,
            },
          });
        }
      },
      addTask: (task: Task) => {
        get().__maybeClearStore();

        set({
          taskStore: {
            tasks: [...get().taskStore.tasks, task],
            date: formatDate(new Date()),
          },
        });
      },
      removeTask: (task: Task) => {
        console.log('removing task', task);
        get().__maybeClearStore();
        console.log('tasks', get().taskStore.tasks);
        set({
          taskStore: {
            tasks: get().taskStore.tasks.filter((t) => t.id !== task.id),
            date: formatDate(new Date()),
          },
        });
      },
    }),
    {
      name: 'daily-store',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
