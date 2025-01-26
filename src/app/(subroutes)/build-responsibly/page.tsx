import {
  Code,
  ShieldCheck,
  GitPullRequest,
  HeartHandshake,
  Activity,
  Users,
} from 'lucide-react';

export default function BuildResponsiblyPage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              Developers: Build Responsibly
              <span className='text-blue-600'>
                {' '}
                for a Healthier Digital World.
              </span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Learn how to create apps and platforms that prioritize user
              wellbeing over profit. Join the movement to combat digital
              addiction and build ethical technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Build Responsibly? */}
      <WhyBuildResponsibly />

      {/* How to Build Responsibly */}
      <section className='py-16 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            How to Build Responsibly
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <ShieldCheck className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Avoid Dark Patterns
              </h3>
              <p className='text-gray-600'>
                Steer clear of manipulative UI designs that trick users into
                actions they didn’t intend.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <Code className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Prioritize Transparency
              </h3>
              <p className='text-gray-600'>
                Be clear about data collection and usage. Give users control
                over their data.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <GitPullRequest className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Open Source Your Code
              </h3>
              <p className='text-gray-600'>
                Share your algorithms and tools to promote transparency and
                collaboration.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <HeartHandshake className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Advocate for Change
              </h3>
              <p className='text-gray-600'>
                Encourage your team and industry peers to adopt ethical design
                practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h2 className='text-3xl font-extrabold text-gray-900 mb-4'>
              Ready to Build Responsibly?
            </h2>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              It starts with you. Start a discussion with your team or community
              and get started.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

const WhyBuildResponsibly = () => {
  return (
    <section className='py-16 bg-white'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Why Build Responsibly?
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center text-center'>
            <ShieldCheck className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              Protect User Wellbeing
            </h3>
            <p className='text-gray-600'>
              Excessive screen time is reducing global sleep by 1.5 hours per
              night and increasing rates of anxiety and depression by 20-30%.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Activity className='h-12 w-12 text-blue-600 mb-4' />{' '}
            {/* Add Activity icon import */}
            <h3 className='text-xl font-semibold mb-2'>
              Combat Physical Health Risks
            </h3>
            <p className='text-gray-600'>
              Prolonged screen time contributes to rising cardiac-related
              deaths, obesity, and digital eye strain affecting 60% of adults.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Users className='h-12 w-12 text-blue-600 mb-4' />{' '}
            {/* Add Users icon import */}
            <h3 className='text-xl font-semibold mb-2'>
              Address Societal Disconnection
            </h3>
            <p className='text-gray-600'>
              Over 50% of people feel lonelier despite being more connected
              online, and misinformation spreads rapidly due to
              engagement-driven algorithms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
