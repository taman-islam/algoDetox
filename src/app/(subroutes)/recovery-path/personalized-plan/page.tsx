import {
  Smartphone,
  Laptop,
  Trash2,
  Lock,
  Smile,
  Zap,
  Heart,
} from 'lucide-react';

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
                  <h3 className='text-xl font-semibold'>Easy</h3>
                  <p className='text-sm text-gray-500'>Try it out</p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Set time limits on your phone and avoid using these apps on your
                computer.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Smartphone className='h-4 w-4 text-blue-600 mr-2' />
                  Use app timers to limit daily usage.
                </li>
                <li className='flex items-center'>
                  <Laptop className='h-4 w-4 text-blue-600 mr-2' />
                  Avoid accessing these apps on your computer.
                </li>
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
                  <h3 className='text-xl font-semibold'>Committed</h3>
                  <p className='text-sm text-gray-500'>Take control</p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Remove these apps from your phone and use them only on your
                computer with site blockers.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Smartphone className='h-4 w-4 text-blue-600 mr-2' />
                  Delete apps from your phone.
                </li>
                <li className='flex items-center'>
                  <Lock className='h-4 w-4 text-blue-600 mr-2' />
                  Use site blockers to limit access on your computer.
                </li>
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
                  <h3 className='text-xl font-semibold'>Advanced</h3>
                  <p className='text-sm text-gray-500'>Reclaim your life</p>
                </div>
              </div>
              <p className='text-gray-600 mb-4'>
                Go all-in: deactivate your accounts and embrace total abstinence
                from these platforms.
              </p>
              <ul className='space-y-2'>
                <li className='flex items-center'>
                  <Trash2 className='h-4 w-4 text-blue-600 mr-2' />
                  Deactivate or delete your accounts.
                </li>
                <li className='flex items-center'>
                  <Lock className='h-4 w-4 text-blue-600 mr-2' />
                  Use blockers to prevent access on all devices.
                </li>
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
