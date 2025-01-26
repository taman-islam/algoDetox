import { ShieldCheck, Lock, Activity } from 'lucide-react';

export default function PrivacyNoticePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              Your Privacy Matters
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              At AlgoDetox, we’re committed to protecting your privacy and
              ensuring your data is safe.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Principles */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
            Our Privacy Principles
          </h2>
          <div className='grid grid-cols-1 gap-8 md:grid-cols-3'>
            <div className='flex flex-col items-center text-center'>
              <ShieldCheck className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>No Tracking</h3>
              <p className='text-gray-600'>
                We don’t track your activity or collect personal data. Your
                privacy is our priority.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Lock className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>No Data Sharing</h3>
              <p className='text-gray-600'>
                We don’t share your data with any third parties. Your
                information stays with you.
              </p>
            </div>
            <div className='flex flex-col items-center text-center'>
              <Activity className='h-12 w-12 text-blue-600 mb-4' />
              <h3 className='text-xl font-semibold mb-2'>Minimal Logging</h3>
              <p className='text-gray-600'>
                We only log website performance data to ensure our platform
                functions properly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Notice */}
      <section className='py-16 bg-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg text-gray-600'>
            <h2 className='text-2xl font-bold text-gray-900'>Privacy Notice</h2>
            <p>
              At AlgoDetox, we believe your privacy is a fundamental right. This
              notice explains how we handle your data and what we do to protect
              it.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              What Data We Collect
            </h3>
            <p>
              We only collect the minimum data necessary to ensure our website
              functions properly. This includes:
            </p>
            <ul>
              <li>
                <strong>Website Performance Data</strong>: We log anonymous data
                about website usage (e.g., page load times, error rates) to
                monitor and improve performance.
              </li>
              <li>
                <strong>No Personal Data</strong>: We don’t collect or store any
                personally identifiable information (PII) such as names, emails,
                or IP addresses.
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              What We Don’t Do
            </h3>
            <p>To protect your privacy, we:</p>
            <ul>
              <li>
                <strong>Don’t Track You</strong>: We don’t use cookies, tracking
                pixels, or any other tools to monitor your activity.
              </li>
              <li>
                <strong>Don’t Share Your Data</strong>: We don’t share, sell, or
                trade your data with any third parties.
              </li>
              <li>
                <strong>Don’t Show Ads</strong>: We don’t use ads, so we have no
                reason to collect or exploit your data.
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              How We Protect Your Data
            </h3>
            <p>
              We take your privacy seriously. Here’s how we ensure your data is
              safe:
            </p>
            <ul>
              <li>
                <strong>Minimal Data Collection</strong>: We only collect the
                data necessary to ensure our website functions properly, and we
                retain it for the shortest time possible. Your data is never
                shared with anyone—ever.
              </li>
              <li>
                <strong>Secure Infrastructure</strong>: Our website is hosted on
                secure servers with industry-standard encryption.
              </li>
              <li>
                <strong>Transparency</strong>: Our algorithms are open source,
                so you can verify how we handle data.
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              Your Rights
            </h3>
            <p>You have the right to:</p>
            <ul>
              <li>
                <strong>Delete</strong>: When you delete your account, we delete
                your data immediately.
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              Contact Us
            </h3>
            <p>
              If you have any questions about this privacy notice or our
              practices, please contact us at:
            </p>
            <p>
              <strong>Email</strong>: privacy@algodetox.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
