import type { Task } from './task';

// Constants for cognitive load weights
const COGNITIVE_WEIGHTS: any = {
  // Base energy requirements
  ENERGY_LEVELS: {
    high: 2.0,
    medium: 1.0,
    low: 0.5,
  },

  // Context switching cost (gets higher with more tasks)
  CONTEXT_SWITCH_MULTIPLIER: 0.2,

  // Recovery time needed after tasks
  RECOVERY_MINUTES: {
    high: 30, // 30 min recovery after high-energy task
    medium: 15, // 15 min after medium
    low: 5, // 5 min after low
  },

  // Meeting drain factors
  MEETING_CONSECUTIVE_PENALTY: 1.2, // Each consecutive meeting increases load
  MEETING_PARTICIPANTS_MULTIPLIER: 0.1, // Each participant adds cognitive load

  // Time of day factors (assuming 9-5 workday)
  TIME_OF_DAY_MULTIPLIER: {
    morning: 0.8, // Fresh mind, better focus
    midday: 1.0, // Normal capacity
    afternoon: 1.2, // More tired
    evening: 1.5, // Should be winding down
  },
};

const MAX_COGNITIVE_LOAD = 10.0; // Upper bound for daily cognitive load

export const calculateCognitiveLoad = (tasks: Task[]): number => {
  let totalLoad = 0;
  let highEnergyWorkMinutes = 0;

  tasks.forEach((task, index) => {
    let taskLoad = COGNITIVE_WEIGHTS.ENERGY_LEVELS[task.energyRequirement];
    const taskDuration = calculateTimeInMinutes(task.timeEstimate);

    // **Track cumulative high-energy work**
    if (task.energyRequirement === 'high') {
      highEnergyWorkMinutes += taskDuration;
    }

    // **Apply Fatigue Multiplier**
    if (highEnergyWorkMinutes > 120) {
      taskLoad *= 1.5; // 50% increase after 2 hours
    }
    if (highEnergyWorkMinutes > 180) {
      taskLoad *= 2; // 100% increase after 3 hours
    }
    if (highEnergyWorkMinutes > 240) {
      taskLoad *= 3; // Extreme exhaustion after 4 hours
    }

    // **Context Switch Cost**
    if (index > 0) {
      const contextMultiplier = Math.pow(1.1, index);
      taskLoad +=
        contextMultiplier * COGNITIVE_WEIGHTS.CONTEXT_SWITCH_MULTIPLIER;
    }

    totalLoad += taskLoad;
  });

  return totalLoad;
};

export const interpretCognitiveLoad = (load: number) => {
  if (load < 5) return { risk: 'low', message: 'Healthy workload' };
  if (load < 8)
    return { risk: 'medium', message: 'Moderate load - consider breaks' };
  return {
    risk: 'high',
    message: 'High cognitive load - reduce tasks or spread them out',
  };
};

export const calculateTimeInMinutes = (time: string) => {
  const timeUnit = time.endsWith('h') ? 'h' : time.endsWith('m') ? 'm' : '';
  return (
    Number.parseFloat(time.replace(timeUnit, '')) * (timeUnit === 'h' ? 60 : 1)
  );
};
