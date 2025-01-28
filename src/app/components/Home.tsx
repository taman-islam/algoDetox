'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Brain,
  ShieldCheck,
  Zap,
  SmilePlus,
  Activity,
  Heart,
  Lock,
  Code,
  HeartHandshake,
  GitPullRequest,
} from 'lucide-react';
import { memo } from 'react';
import { QuizComponent } from './QuizComponent';

export const HomeComponent = memo(
  ({ quizCompleted }: { quizCompleted: boolean }) => {
    return (
      <div>
        <QuizComponent />
        <WhyAlgoDetox />
        <WhyTrustAlgoDetox />
        <HowAlgoDetoxWorks />

        {/* TODO: Add Success Stories */}
        <JoinTheMission />

        {/* Footer */}
        <footer className='bg-gray-800 text-white py-8'>
          <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
            <div className='flex justify-between items-center'>
              <div className='flex items-center'>
                <Brain className='h-8 w-8 text-blue-400' />
                <span className='ml-2 text-xl font-bold'>AlgoDetox</span>
              </div>
              <Links />
              {/* TODO: Add links <Links /> */}
            </div>
          </div>
          <Copyright />
        </footer>
      </div>
    );
  },
);

const Copyright = memo(() => {
  return (
    <div className='mt-4 text-center text-sm'>
      © 2025 AlgoDetox. All rights reserved.
    </div>
  );
});

const Support = memo(() => {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Support the Mission
        </h2>
        <p className='text-center text-gray-600 mb-8'>
          AlgoDetox is free because digital wellbeing should be accessible to
          everyone. Your donations help us improve our tools and reach more
          people in need.
        </p>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
          <div className='bg-white shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Supporter ($5)</h3>
            <p className='text-gray-600 mb-4'>
              Help us maintain and improve the platform
            </p>
            <Button className='w-full'>Donate $5</Button>
          </div>
          <div className='bg-white shadow rounded-lg p-6'>
            <h3 className='text-xl font-semibold mb-4'>Sustainer ($10)</h3>
            <p className='text-gray-600 mb-4'>
              Support development of new features and research
            </p>
            <Button className='w-full'>Donate $10</Button>
          </div>
        </div>
      </div>
    </section>
  );
});

const SuccessStories = memo(() => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Success Stories
        </h2>
        <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
          <div className='bg-white shadow rounded-lg p-6'>
            <p className='text-gray-600 mb-4'>
              "AlgoDetox helped me reduce my screen time by 50%. I'm more
              present with my family and productive at work now!"
            </p>
            <p className='font-semibold'>- Sarah K., Digital Marketer</p>
          </div>
          <div className='bg-white shadow rounded-lg p-6'>
            <p className='text-gray-600 mb-4'>
              "As a student, I was constantly distracted by social media.
              AlgoDetox helped me regain focus and improve my grades."
            </p>
            <p className='font-semibold'>- Alex T., College Student</p>
          </div>
          <div className='bg-white shadow rounded-lg p-6'>
            <p className='text-gray-600 mb-4'>
              "The daily check-ins and personalized insights were eye-opening.
              I've developed much healthier digital habits."
            </p>
            <p className='font-semibold'>- Dr. Michael Chen, Psychologist</p>
          </div>
        </div>
      </div>
    </section>
  );
});

const Links = memo(() => (
  <div className='flex space-x-6'>
    <Link href='/privacy-notice' className='hover:text-blue-400'>
      Privacy Policy
    </Link>
    <Link href='/terms-of-service' className='hover:text-blue-400'>
      Terms of Service
    </Link>
  </div>
));

const JoinTheMission = memo(() => {
  return (
    <section className='py-16 bg-blue-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Support the Mission
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          {/* For Developers */}
          <div className='flex flex-col items-center text-center'>
            <Code className='h-12 w-12 text-blue-600 mb-4' />{' '}
            <h3 className='text-xl font-semibold mb-2'>
              Developers: Build Responsibly
            </h3>
            <p className='text-gray-600 mb-4'>
              Avoid creating intrusive features that exploit user attention.
              Design for wellbeing, not addiction.
            </p>
            <Button
              variant='outline'
              className='text-blue-600 border-blue-600 hover:bg-blue-50'
            >
              <Link href='/build-responsibly'>Learn More</Link>
            </Button>
          </div>

          {/* Open Source Contributions */}
          <div className='flex flex-col items-center text-center'>
            <GitPullRequest className='h-12 w-12 text-blue-600 mb-4' />{' '}
            <h3 className='text-xl font-semibold mb-2'>
              Contribute to Our Open Source Project
            </h3>
            <p className='text-gray-600 mb-4'>
              Help us improve AlgoDetox by sending pull requests to our
              open-source algorithms and tools.
            </p>
            <Button
              variant='outline'
              className='text-blue-600 border-blue-600 hover:bg-blue-50'
            >
              <Link href='https://github.com/taman-islam/algoDetox'>
                Github
              </Link>
            </Button>
          </div>

          {/* For Mental Health Professionals */}
          <div className='flex flex-col items-center text-center'>
            <HeartHandshake className='h-12 w-12 text-blue-600 mb-4' />{' '}
            <h3 className='text-xl font-semibold mb-2'>
              Mental Health Professionals: Join Us
            </h3>
            <p className='text-gray-600 mb-4'>
              Collaborate with us on research, insights, and strategies to
              combat digital addiction.
            </p>
            <Button
              variant='outline'
              className='text-blue-600 border-blue-600 hover:bg-blue-50'
            >
              <Link href='https://algodetox.slack.com'>Get Involved</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
});

const WhyAlgoDetox = memo(() => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Why AlgoDetox?
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center text-center'>
            <ShieldCheck className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              Algorithm-driven dopamine traps
            </h3>
            <p className='text-gray-600'>
              Understand how tech companies profit from your attention and learn
              to break free.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Zap className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              The Mass Health Crisis
            </h3>
            <p className='text-gray-600'>
              Explore how addictive tech contributes to rising anxiety,
              depression, and societal disconnection on a global scale.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <SmilePlus className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>
              Personalized detox journey
            </h3>
            <p className='text-gray-600'>
              Get a tailored 30-day plan to rewire your brain for better focus
              and wellbeing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

const WhyTrustAlgoDetox = memo(() => {
  return (
    <section className='py-16 bg-gray-50'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Why Trust AlgoDetox?
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
          <div className='flex flex-col items-center text-center'>
            <ShieldCheck className='h-12 w-12 text-blue-600 mb-4' />
            <h3 className='text-xl font-semibold mb-2'>Non-Profit Mission</h3>
            <p className='text-gray-600'>
              We’re here to help, not profit. AlgoDetox is a non-profit
              initiative dedicated to improving human life through reducing
              digital addiction.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Lock className='h-12 w-12 text-blue-600 mb-4' />{' '}
            <h3 className='text-xl font-semibold mb-2'>No Tracking, Ever</h3>
            <p className='text-gray-600'>
              We don’t and will never show ads. Your privacy is our priority,
              and we never track or sell your data.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <Code className='h-12 w-12 text-blue-600 mb-4' />{' '}
            <h3 className='text-xl font-semibold mb-2'>
              Open Source Algorithms
            </h3>
            <p className='text-gray-600'>
              Our algorithms are transparent and open source. You can see
              exactly how they work.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});

const HowAlgoDetoxWorks = memo(() => {
  return (
    <section className='py-16'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          How It Works
        </h2>
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4'>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-blue-100 rounded-full p-3 mb-4'>
              <ShieldCheck className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>
              Personalize Your Journey
            </h3>
            <p className='text-gray-600'>
              Identify your challenges and set initial detox goals.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-blue-100 rounded-full p-3 mb-4'>
              <Activity className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>
              Follow Your 30-Day Plan
            </h3>
            <p className='text-gray-600'>
              Get daily challenges and tips to reduce digital dependence.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-blue-100 rounded-full p-3 mb-4'>
              <Heart className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>Track Your Progress</h3>
            <p className='text-gray-600'>
              Log daily check-ins and see your improvements over time.
            </p>
          </div>
          <div className='flex flex-col items-center text-center'>
            <div className='bg-blue-100 rounded-full p-3 mb-4'>
              <Brain className='h-8 w-8 text-blue-600' />
            </div>
            <h3 className='text-lg font-semibold mb-2'>
              Gain Valuable Insights
            </h3>
            <p className='text-gray-600'>
              Understand your behavior patterns and emotional triggers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
});
