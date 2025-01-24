import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Brain,
  ShieldCheck,
  Zap,
  SmilePlus,
  Activity,
  Heart,
} from 'lucide-react';

export default function Home() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Navbar */}
      <nav className='bg-white shadow-sm'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between h-16'>
            <div className='flex'>
              <div className='flex-shrink-0 flex items-center'>
                <Brain className='h-8 w-8 text-blue-600' />
                <span className='ml-2 text-xl font-bold text-gray-800'>
                  algoDetox
                </span>
              </div>
            </div>
            <div className='flex items-center'>
              <Link href='/signin'>
                <Button variant='ghost'>Sign In</Button>
              </Link>
              <Link href='/signup'>
                <Button variant='outline' className='ml-4'>
                  Sign Up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              Break Free from the Algorithm.
              <span className='text-blue-600'> Reclaim Your Focus.</span>
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              algoDetox helps you escape the dopamine traps of social media and
              addictive apps through a 30-day detox plan, emotion tracking, and
              mindful reintroduction.
            </p>
            <div className='mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8'>
              <Link href='/signup' className='rounded-md shadow'>
                <Button className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10'>
                  Start Your Detox – Free
                </Button>
              </Link>
              <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
                <Button
                  variant='outline'
                  className='w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
                >
                  Support the Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why algoDetox? */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            Why algoDetox?
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='flex flex-col items-center text-center'>
              <ShieldCheck className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Tech companies profit from your distraction
              </h3>
              <p className='text-gray-600'>
                Learn how to take back control of your attention and time.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Zap className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Algorithms manipulate your attention
              </h3>
              <p className='text-gray-600'>
                Understand the tactics used to keep you scrolling and how to
                resist them.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <SmilePlus className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>
                Dopamine addiction damages focus & mental health
              </h3>
              <p className='text-gray-600'>
                Discover how to rewire your brain for better focus and
                wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
                Identify & Block harmful apps/websites
              </h3>
              <p className='text-gray-600'>
                We'll help you recognize and limit access to digital
                distractions.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <Activity className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Follow the 30-Day Detox Plan
              </h3>
              <p className='text-gray-600'>
                A structured program to gradually reduce your dependence on
                addictive tech.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <Heart className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Check Your Emotions & Triggers
              </h3>
              <p className='text-gray-600'>
                Understand the emotional drivers behind your tech usage.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <div className='bg-blue-100 rounded-full p-3 mb-4'>
                <Brain className='h-8 w-8 text-blue-600' />
              </div>
              <h3 className='text-lg font-semibold mb-2'>
                Build a Healthier Relationship with Technology
              </h3>
              <p className='text-gray-600'>
                Learn to use tech mindfully and purposefully.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className='py-16 bg-gray-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            What Our Users Say
          </h2>
          <div className='grid grid-cols-1 gap-8 lg:grid-cols-3'>
            <div className='bg-white shadow rounded-lg p-6'>
              <p className='text-gray-600 mb-4'>
                "algoDetox helped me regain control over my screen time. I'm
                more productive and happier now!"
              </p>
              <p className='font-semibold'>- Sarah K., Early Adopter</p>
            </div>
            <div className='bg-white shadow rounded-lg p-6'>
              <p className='text-gray-600 mb-4'>
                "As a neuroscientist, I'm impressed by the science-based
                approach of algoDetox. It's a game-changer for digital
                wellbeing."
              </p>
              <p className='font-semibold'>
                - Dr. Michael Chen, Neuroscientist
              </p>
            </div>
            <div className='bg-white shadow rounded-lg p-6'>
              <p className='text-gray-600 mb-4'>
                "The emotion tracking feature was eye-opening. I never realized
                how much I used social media to avoid stress."
              </p>
              <p className='font-semibold'>- Alex T., User</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Mission */}
      <section className='py-16'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            Support the Mission
          </h2>
          <p className='text-center text-gray-600 mb-8'>
            algoDetox is free because digital freedom should be accessible to
            everyone. Your donations help us build better tools and reach more
            people.
          </p>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-2'>
            <div className='bg-white shadow rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4'>Supporter ($5)</h3>
              <p className='text-gray-600 mb-4'>Funds platform maintenance</p>
              <Button className='w-full'>Donate $5</Button>
            </div>
            <div className='bg-white shadow rounded-lg p-6'>
              <h3 className='text-xl font-semibold mb-4'>Sustainer ($10)</h3>
              <p className='text-gray-600 mb-4'>
                Helps improve AI-based emotion tracking
              </p>
              <Button className='w-full'>Donate $10</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-800 text-white py-8'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center'>
              <Brain className='h-8 w-8 text-blue-400' />
              <span className='ml-2 text-xl font-bold'>algoDetox</span>
            </div>
            <div className='flex space-x-6'>
              <Link href='#' className='hover:text-blue-400'>
                Privacy Policy
              </Link>
              <Link href='#' className='hover:text-blue-400'>
                Terms of Service
              </Link>
              <Link href='#' className='hover:text-blue-400'>
                Contact Us
              </Link>
            </div>
          </div>
          <div className='mt-4 text-center text-sm'>
            © 2023 algoDetox. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
