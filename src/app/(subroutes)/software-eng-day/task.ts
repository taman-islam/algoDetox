export const taskLabels = [
  // High Energy (Complex Cognitive Tasks)
  {
    id: 'system-design',
    value: 'system-design',
    label: 'System Design/Architecture',
    energyRequirement: 'high',
    contextSwitchCost: 'high',
    recoveryTime: 30,
  },
  {
    id: 'complex-debugging',
    value: 'complex-debugging',
    label: 'Complex Debugging',
    energyRequirement: 'high',
    contextSwitchCost: 'high',
    recoveryTime: 25,
  },
  {
    id: 'feature-development',
    value: 'feature-development',
    label: 'New Feature Development',
    energyRequirement: 'high',
    contextSwitchCost: 'high',
    recoveryTime: 20,
  },
  {
    id: 'incident-response',
    value: 'incident-response',
    label: 'Production Incident Response',
    energyRequirement: 'high',
    contextSwitchCost: 'high',
    recoveryTime: 30,
    urgent: true,
  },

  // Medium Energy (Standard Development Tasks)
  {
    id: 'code-review',
    value: 'code-review',
    label: 'Code Review',
    energyRequirement: 'medium',
    contextSwitchCost: 'medium',
    recoveryTime: 15,
    batchable: true,
  },
  {
    id: 'integration-testing',
    value: 'integration-testing',
    label: 'Integration Testing',
    energyRequirement: 'medium',
    contextSwitchCost: 'medium',
    recoveryTime: 15,
  },
  {
    id: 'technical-discussion',
    value: 'technical-discussion',
    label: 'Technical Discussion',
    energyRequirement: 'medium',
    contextSwitchCost: 'low',
    recoveryTime: 10,
    meetingType: 'collaborative',
  },

  // Low Energy (Routine Tasks)
  {
    id: 'status-update',
    value: 'status-update',
    label: 'Status Update Meeting',
    energyRequirement: 'low',
    contextSwitchCost: 'low',
    recoveryTime: 5,
    meetingType: 'status',
    batchable: true,
  },
  {
    id: 'documentation-update',
    value: 'documentation-update',
    label: 'Documentation Update',
    energyRequirement: 'low',
    contextSwitchCost: 'low',
    recoveryTime: 5,
    batchable: true,
  },
  {
    id: 'routine-maintenance',
    value: 'routine-maintenance',
    label: 'Routine Maintenance',
    energyRequirement: 'low',
    contextSwitchCost: 'low',
    recoveryTime: 5,
    batchable: true,
  },
];

export type TaskLabel = (typeof taskLabels)[number]['value'];

export interface Task {
  id: number;
  title: string;
  description: string;
  timeEstimate: string;
  priority: 'high' | 'medium' | 'low';
  label: TaskLabel;
  completed: boolean;
  energyRequirement: 'high' | 'medium' | 'low';
  contextSwitchCost: 'high' | 'medium' | 'low';
  recoveryTime: number;
  batchable: boolean;
  meetingType?: 'status' | 'collaborative';
  urgent?: boolean;
}
