import {
  Smartphone,
  Trash2,
  Smile,
  Zap,
  Heart,
  Clock,
  Monitor,
  Shield,
  Calendar,
  Bell,
  Book,
} from 'lucide-react';

const DetoxLevel = {
  EASY: 'Easy',
  COMMITTED: 'Committed',
  ADVANCED: 'Advanced',
} as const;

type DetoxLevel = (typeof DetoxLevel)[keyof typeof DetoxLevel];

const DetoxActionsByLevel: Record<
  DetoxLevel,
  {
    title: string;
    outcome: string;
    description: string;
    actions: {
      icon: React.ReactNode;
      content: string;
    }[];
  }
> = {
  [DetoxLevel.EASY]: {
    title: 'Ease Into It',
    outcome: 'Test the waters',
    description:
      'Start by reducing exposure. Set app time limits and remove easy access on your computer.',
    actions: [
      {
        icon: <Clock className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Set daily app usage timers on your phone.',
      },
      {
        icon: <Monitor className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Use browser extensions to remind you to take breaks.',
      },
      {
        icon: <Calendar className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Schedule specific times for checking social media.',
      },
    ],
  },
  [DetoxLevel.COMMITTED]: {
    title: 'Take Control',
    outcome: 'Reduce dependency',
    description:
      'Limit engagement further by removing apps from your phone and restricting desktop access.',
    actions: [
      {
        icon: <Smartphone className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Uninstall social media apps from your phone.',
      },
      {
        icon: <Shield className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Use website blockers to control access on your computer.',
      },
      {
        icon: <Bell className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Turn off notifications for all social media apps.',
      },
    ],
  },
  [DetoxLevel.ADVANCED]: {
    title: 'Full Detox',
    outcome: 'Break free completely',
    description:
      'Go all-in: deactivate accounts, eliminate all access points, and replace with healthier habits.',
    actions: [
      {
        icon: <Trash2 className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Deactivate or permanently delete social media accounts.',
      },
      {
        icon: <Shield className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Block access to social platforms on all devices.',
      },
      {
        icon: <Book className='h-4 w-4 text-blue-600 mr-2' />,
        content: 'Replace social media time with a new hobby or skill.',
      },
    ],
  },
};

export default function PersonalizedPlanPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              Your Personalized
              <span className='text-blue-600'> Detox Plan</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Choose your level of commitment and start your journey to break
              free from digital addiction.
            </p>
          </div>
        </div>
      </section>

      {/* Three-Card Layout */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            Choose Your Detox Level
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {/* Easy Card */}
            <div className='bg-white p-6 rounded-lg shadow-md border border-blue-100'>
              <div className='flex items-center mb-4'>
                <Smile className='h-8 w-8 text-blue-600 mr-2' />
                <div>
                  <h3 className='text-xl font-semibold'>
                    {DetoxActionsByLevel[DetoxLevel.EASY].title}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {DetoxActionsByLevel[DetoxLevel.EASY].outcome}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                {DetoxActionsByLevel[DetoxLevel.EASY].description}
              </p>
              <ul className='space-y-2'>
                {DetoxActionsByLevel[DetoxLevel.EASY].actions.map(
                  (action, index) => (
                    <li key={index} className='flex items-center'>
                      {action.icon}
                      {action.content}
                    </li>
                  ),
                )}
              </ul>
              <div className='mt-6 text-center'>
                <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                >
                  Start Easy Detox
                </a>
              </div>
            </div>

            {/* Committed Card */}
            <div className='bg-white p-6 rounded-lg shadow-md border border-blue-100'>
              <div className='flex items-center mb-4'>
                <Zap className='h-8 w-8 text-blue-600 mr-2' />
                <div>
                  <h3 className='text-xl font-semibold'>
                    {DetoxActionsByLevel[DetoxLevel.COMMITTED].title}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {DetoxActionsByLevel[DetoxLevel.COMMITTED].outcome}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                {DetoxActionsByLevel[DetoxLevel.COMMITTED].description}
              </p>
              <ul className='space-y-2'>
                {DetoxActionsByLevel[DetoxLevel.COMMITTED].actions.map(
                  (action, index) => (
                    <li key={index} className='flex items-center'>
                      {action.icon}
                      {action.content}
                    </li>
                  ),
                )}
              </ul>
              <div className='mt-6 text-center'>
                <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                >
                  Start Committed Detox
                </a>
              </div>
            </div>

            {/* Advanced Card */}
            <div className='bg-white p-6 rounded-lg shadow-md border border-blue-100'>
              <div className='flex items-center mb-4'>
                <Heart className='h-8 w-8 text-blue-600 mr-2' />
                <div>
                  <h3 className='text-xl font-semibold'>
                    {DetoxActionsByLevel[DetoxLevel.ADVANCED].title}
                  </h3>
                  <p className='text-sm text-gray-500'>
                    {DetoxActionsByLevel[DetoxLevel.ADVANCED].outcome}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                {DetoxActionsByLevel[DetoxLevel.ADVANCED].description}
              </p>
              <ul className='space-y-2'>
                {DetoxActionsByLevel[DetoxLevel.ADVANCED].actions.map(
                  (action, index) => (
                    <li key={index} className='flex items-center'>
                      {action.icon}
                      {action.content}
                    </li>
                  ),
                )}
              </ul>
              <div className='mt-6 text-center'>
                <a
                  href='#'
                  className='inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700'
                >
                  Start Advanced Detox
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
