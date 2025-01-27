import {
  Slash,
  Clock,
  Monitor,
  Bell,
  Calendar,
  AlertCircle,
  Shield,
  StopCircle,
  Mail,
  Slack,
  Book,
  Gamepad2,
  CreditCard,
  Trash2,
  Chrome,
  Blocks,
  Link,
  Smartphone,
} from 'lucide-react';

interface Step {
  uid: string;
  icon: React.ReactNode;
  content: React.ReactNode;
  details?: string;
}

const getIconClass = (plan: string): string => {
  const colorClass =
    plan === 'easy'
      ? 'blue-600'
      : plan === 'committed'
      ? 'purple-600'
      : 'green-600';
  return `h-6 w-6 text-${colorClass}`;
};

export const EASY_STEPS: Step[] = [
  {
    uid: 'easy-step-1',
    icon: <Slash className={getIconClass('easy')} />,
    content: <span>Separate your work and personal devices.</span>,
    details:
      'Use a work-only device for work-related tasks and a personal device for personal use.',
  },
  {
    uid: 'easy-step-2',
    icon: <Clock className={getIconClass('easy')} />,
    content: (
      <span>Set daily app usage timers for social media on your phone.</span>
    ),
    details:
      'Setting timers helps you become aware of how much time you spend on social media and encourages mindful usage.',
  },
  {
    uid: 'easy-step-3',
    icon: <Monitor className={getIconClass('easy')} />,
    content: (
      <span>
        Use browser extensions to limit access to social media on your computer.
      </span>
    ),
    details:
      'Limiting access on your computer reduces temptation and helps you focus on productive tasks.',
  },
  {
    uid: 'easy-step-4',
    icon: <Bell className={getIconClass('easy')} />,
    content: (
      <span>
        Turn off notifications for non-essential apps. Only allow important
        notifications from absolutely necessary apps.
      </span>
    ),
    details:
      'Notifications are a major source of distraction. Turning them off helps you stay focused and reduces interruptions.',
  },
  {
    uid: 'easy-step-5',
    icon: <Calendar className={getIconClass('easy')} />,
    content: <span>Schedule specific times for checking social media.</span>,
    details:
      'Designating specific times for social media helps you avoid constant checking and creates a healthier routine.',
  },
  {
    uid: 'easy-step-6',
    icon: <AlertCircle className={getIconClass('easy')} />,
    content: (
      <span>
        If you find yourself unable to stick to these limits, consider upgrading
        to the{' '}
        <Link
          className='font-medium text-blue-600 hover:text-blue-500'
          href='/start-detox/committed'
        >
          Committed Detox
        </Link>
        .
      </span>
    ),
    details:
      'The Easy Detox is a starting point, but if you struggle to stay within limits, a more committed approach may be necessary.',
  },
];

export const COMMITTED_STEPS = [
  {
    uid: 'committed-step-1',
    icon: <Smartphone className={getIconClass('easy')} />,
    content: 'Uninstall all social media apps from your phone.',
    details:
      'Removing apps from your phone eliminates easy access and reduces the temptation to scroll mindlessly.',
  },
  {
    uid: 'committed-step-2',
    icon: <Shield className={getIconClass('easy')} />,
    content:
      'Use website blockers to restrict access to social media on your computer.',
    details:
      'Website blockers help you create a distraction-free environment, making it easier to focus on important tasks.',
  },
  {
    uid: 'committed-step-3',
    icon: <StopCircle className={getIconClass('easy')} />,
    content:
      'Use News Feed Eradicator on your browser so you can still use some features but limit your exposure to infinite scrolling.',
    details:
      'News Feed Limiters help you create a distraction-free environment, making it easier to focus on important tasks.',
  },
  {
    uid: 'committed-step-4',
    icon: <Mail className={getIconClass('easy')} />,
    content: 'Remove email apps from your personal phone.',
    details:
      'Deleting email apps from your personal phone reduces distractions and helps you separate work from personal life.',
  },
  {
    uid: 'committed-step-5',
    icon: <Slack className={getIconClass('easy')} />,
    content:
      'Remove work-related apps like Slack and Microsoft Teams from your personal phone.',
    details:
      'Keeping work apps off your personal phone helps you maintain boundaries and avoid burnout.',
  },
  {
    uid: 'committed-step-6',
    icon: <Book className={getIconClass('easy')} />,
    content:
      'Replace screen time with offline activities like reading or exercising.',
    details:
      'Replacing digital habits with offline activities improves mental health and helps you develop new, healthier routines.',
  },
  {
    uid: 'committed-step-7',
    icon: <Calendar className={getIconClass('easy')} />,
    content:
      'Schedule specific times for checking email and work-related apps.',
    details:
      'Designating specific times for checking email and work apps helps you stay focused and avoid constant interruptions.',
  },
  {
    uid: 'committed-step-8',
    icon: <AlertCircle className={getIconClass('easy')} />,
    content: (
      <span>
        If you still find yourself distracted, consider upgrading to the{' '}
        <Link
          href='/start-detox/advanced'
          className='font-medium text-blue-600 hover:text-blue-500'
        >
          Advanced Detox.
        </Link>{' '}
      </span>
    ),
    details:
      'The Committed Detox is effective for many, but if you need a more drastic change, the Advanced Detox may be the right choice.',
  },
];
export const ADVANCED_STEPS = [
  {
    uid: 'advanced-step-1',
    icon: <Trash2 className={getIconClass('easy')} />,
    content: 'Deactivate or permanently delete all social media accounts.',
  },
  {
    uid: 'advanced-step-2',
    icon: <Chrome className={getIconClass('easy')} />,
    content: 'Use a privacy-focused browser like Firefox and avoid signing in.',
  },
  {
    uid: 'advanced-step-3',
    icon: <Blocks className={getIconClass('easy')} />,
    content:
      'Install an ad blocker extension (e.g., AdBlock, uBlock Origin, AdGuard).',
  },
  {
    uid: 'advanced-step-4',
    icon: <Slash className={getIconClass('easy')} />,
    content:
      'Block distracting websites using tools like Freedom, Cold Turkey, or News Feed Eradicator.',
  },
  {
    uid: 'advanced-step-5',
    icon: <Smartphone className={getIconClass('easy')} />,
    content: 'Remove social media and non-essential apps from your phone.',
  },
  {
    uid: 'advanced-step-6',
    icon: <Mail className={getIconClass('easy')} />,
    content:
      'Delete email apps from your personal phone to reduce distractions.',
  },
  {
    uid: 'advanced-step-7',
    icon: <Slack className={getIconClass('easy')} />,
    content:
      'Remove work-related apps like Slack and Microsoft Teams from your personal phone.',
  },
  {
    uid: 'advanced-step-8',
    icon: <Gamepad2 className={getIconClass('easy')} />,
    content: 'Remove gaming apps from your phone.',
  },
  {
    uid: 'advanced-step-9',
    icon: <Book className={getIconClass('easy')} />,
    content:
      'Replace screen time with offline activities like reading, exercise, or learning a new skill.',
  },
  {
    uid: 'advanced-step-10',
    icon: <CreditCard className={getIconClass('easy')} />,
    content:
      'Disable credit card auto-fill in browsers to prevent impulse purchases.',
  },
];
