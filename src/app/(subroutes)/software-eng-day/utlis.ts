import type { Task } from './task';

// Constants for cognitive load weights
export const COGNITIVE_WEIGHTS: any = {
  // Base energy requirements
  ENERGY_LEVELS: {
    high: 2.0,
    medium: 1.0,
    low: 0.5,
  },

  MAX_COGNITIVE_LOAD: 10.0,

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

  URGENT_MULTIPLIER: 1.3,
};

const MAX_COGNITIVE_LOAD = 10.0; // Upper bound for daily cognitive load

export const calculateCognitiveLoad = (tasks: Task[]) => {
  let totalLoad = 0;
  let contextSwitches = 0;
  let previousEnergy: string | null = null;

  tasks.forEach((task) => {
    // Parse task duration to hours
    const taskHours = calculateTimeInMinutes(task.timeEstimate) / 60;

    // Base load scaled by duration
    let taskLoad =
      COGNITIVE_WEIGHTS.ENERGY_LEVELS[task.energyRequirement] * taskHours;

    // Track context switches between different energy levels
    if (previousEnergy !== null && previousEnergy !== task.energyRequirement) {
      contextSwitches++;
    }
    previousEnergy = task.energyRequirement;

    // Recovery time proportional to task duration
    const recoveryLoad = (task.recoveryTime * taskHours) / 60;
    taskLoad += recoveryLoad;

    // Apply urgent task multiplier
    if (task.urgent) {
      taskLoad *= COGNITIVE_WEIGHTS.URGENT_MULTIPLIER;
    }

    totalLoad += taskLoad;
  });

  // Add context switching penalty
  totalLoad += contextSwitches * COGNITIVE_WEIGHTS.CONTEXT_SWITCH_MULTIPLIER;

  return Math.round(totalLoad * 100) / 100; // Round to 2 decimal places
};

export const interpretCognitiveLoad = (load: number) => {
  if (load < COGNITIVE_WEIGHTS.MAX_COGNITIVE_LOAD * 0.75)
    return {
      textColor: 'green-600',
      risk: 'low',
      message: "Great job! You're working at a sustainable pace. Keep it up!",
      withinLimit: true,
    };
  if (load < COGNITIVE_WEIGHTS.MAX_COGNITIVE_LOAD * 0.9)
    return {
      textColor: 'yellow-600',
      risk: 'medium',
      message: "You're doing well! Consider a short break to stay sharp.",
      withinLimit: true,
    };
  if (load <= COGNITIVE_WEIGHTS.MAX_COGNITIVE_LOAD)
    return {
      textColor: 'orange-600',
      risk: 'high',
      message: "You've reached your limit—take a well-earned break!",
      withinLimit: false,
    };
  return {
    textColor: 'red-600',
    risk: 'critical',
    message: "You're overworking—prioritize rest and recharge!",
    withinLimit: false,
  };
};

export const calculateTimeInMinutes = (time: string) => {
  const timeUnit = time.endsWith('h') ? 'h' : time.endsWith('m') ? 'm' : '';
  return (
    Number.parseFloat(time.replace(timeUnit, '')) * (timeUnit === 'h' ? 60 : 1)
  );
};
