import {
  Clock,
  Monitor,
  Smartphone,
  Shield,
  Trash2,
  Book,
  Zap,
  Heart,
  Smile,
  Calendar,
  Bell,
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
    duration: string;
    difficulty: string;
    actions: {
      icon: React.ReactNode;
      content: string;
    }[];
    cta: {
      label: string;
      href: string;
    };
    color: string;
    gradient: string;
    icon: React.ReactNode;
  }
> = {
  [DetoxLevel.EASY]: {
    title: 'Ease Into It',
    outcome: 'Test the waters',
    description:
      'Start small: limit daily social media usage. While this is the easiest level of detox, it rarely leads to lasting change.',
    duration: '1-2 weeks',
    difficulty: 'Low',
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
    cta: {
      label: 'Start Easy Detox',
      href: '/start-detox/easy',
    },
    color: 'blue',
    gradient: 'from-blue-50 to-blue-100',
    icon: <Smile className='h-8 w-8 text-blue-600' />,
  },
  [DetoxLevel.COMMITTED]: {
    title: 'Take Control',
    outcome: 'Reduce dependency',
    description:
      'Take control: delete apps from your phone and block access on your computer.',
    duration: '2-4 weeks',
    difficulty: 'Medium',
    actions: [
      {
        icon: <Smartphone className='h-4 w-4 text-green-600 mr-2' />,
        content: 'Uninstall social media apps from your phone.',
      },
      {
        icon: <Shield className='h-4 w-4 text-green-600 mr-2' />,
        content: 'Use website blockers to control access on your computer.',
      },
      {
        icon: <Bell className='h-4 w-4 text-green-600 mr-2' />,
        content: 'Turn off notifications for all social media apps.',
      },
    ],
    cta: {
      label: 'Start Committed Detox',
      href: '/start-detox/committed',
    },
    color: 'purple',
    gradient: 'from-purple-50 to-purple-100',
    icon: <Zap className='h-8 w-8 text-purple-600' />,
  },
  [DetoxLevel.ADVANCED]: {
    title: 'Full Detox',
    outcome: 'Break free completely',
    description:
      'Break free completely: deactivate accounts, block all intrusions, and embrace healthier habits.',
    duration: '4+ weeks',
    difficulty: 'High',
    actions: [
      {
        icon: <Trash2 className='h-4 w-4 text-purple-600 mr-2' />,
        content: 'Deactivate or permanently delete social media accounts.',
      },
      {
        icon: <Shield className='h-4 w-4 text-purple-600 mr-2' />,
        content: 'Block access to social platforms on all devices.',
      },
      {
        icon: <Book className='h-4 w-4 text-purple-600 mr-2' />,
        content: 'Replace social media time with a new hobby or skill.',
      },
    ],
    cta: {
      label: 'Start Advanced Detox',
      href: '/start-detox/advanced',
    },
    color: 'green',
    gradient: 'from-green-50 to-green-100',
    icon: <Heart className='h-8 w-8 text-green-600' />,
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

      <RecommendedActions />

      {/* Three-Card Layout */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            Choose Your Detox Level
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            {Object.entries(DetoxActionsByLevel).map(([level, data]) => (
              <div
                key={level}
                className={`bg-gradient-to-b ${data.gradient} p-6 rounded-lg shadow-md border border-${data.color}-200 hover:shadow-lg transition-shadow`}
              >
                <div className='flex items-center mb-4'>
                  {data.icon}
                  <div className='ml-2'>
                    <h3 className='text-xl font-semibold'>{data.title}</h3>
                    <p className='text-sm text-gray-500'>{data.outcome}</p>
                  </div>
                </div>
                <p className='text-gray-600 mb-4'>{data.description}</p>
                <ul className='space-y-2 mb-6'>
                  {data.actions.map((action, index) => (
                    <li key={index} className='flex items-center'>
                      {action.icon}
                      <span className='text-sm'>{action.content}</span>
                    </li>
                  ))}
                </ul>
                <div className='text-center'>
                  <a
                    href={data.cta.href}
                    className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700`}
                  >
                    {data.cta.label}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const RecommendedActions = () => {
  const recommendations = [
    {
      platform: 'Instagram',
      level: DetoxLevel.EASY,
      reason:
        'You spend a lot of time scrolling through Instagram, but it’s not essential for your work or personal life.',
    },
    {
      platform: 'LinkedIn',
      level: DetoxLevel.EASY,
      reason:
        'You use LinkedIn for professional networking, but limiting your usage can help you stay focused.',
    },
    {
      platform: 'Facebook',
      level: DetoxLevel.ADVANCED,
      reason:
        'Facebook is a major source of distraction and doesn’t add significant value to your daily life.',
    },
  ];
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Our Recommendations
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {recommendations.map((rec, index) => (
            <div
              key={index}
              className={`bg-gradient-to-b ${
                DetoxActionsByLevel[rec.level].gradient
              } p-6 rounded-lg shadow-md border border-${
                DetoxActionsByLevel[rec.level].color
              }-200 hover:shadow-lg transition-shadow`}
            >
              <div className='flex items-center mb-4'>
                {DetoxActionsByLevel[rec.level].icon}
                <div className='ml-2'>
                  <h3 className='text-xl font-semibold'>{rec.platform}</h3>
                  <p className='text-sm text-gray-500'>
                    {DetoxActionsByLevel[rec.level].title}
                  </p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>{rec.reason}</p>
              <div className='text-center'>
                <a
                  href={DetoxActionsByLevel[rec.level].cta.href}
                  className={`inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-${
                    DetoxActionsByLevel[rec.level].color
                  }-600 hover:bg-${DetoxActionsByLevel[rec.level].color}-700`}
                >
                  {DetoxActionsByLevel[rec.level].cta.label}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
