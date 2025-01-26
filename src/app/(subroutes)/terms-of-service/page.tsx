import Link from 'next/link';
export default function TermsOfServicePage() {
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {/* Hero Section */}
      <section className='py-20'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center'>
            <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
              Terms of Service
            </h1>
            <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
              Welcome to AlgoDetox! By using our platform, you agree to these
              terms. Please read them carefully.
            </p>
          </div>
        </div>
      </section>

      {/* Terms of Service Content */}
      <section className='py-16 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='prose prose-lg text-gray-600'>
            <h2 className='text-2xl font-bold text-gray-900'>Introduction</h2>
            <p>
              These Terms of Service ("Terms") govern your use of the AlgoDetox
              website and services ("Platform"). By accessing or using the
              Platform, you agree to be bound by these Terms. If you do not
              agree, please do not use the Platform.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              1. Eligibility
            </h3>
            <p>To use AlgoDetox, you must:</p>
            <ul className='list-disc list-inside'>
              <li>
                Be at least 13 years old (or the minimum age of digital consent
                in your country).
              </li>
              <li>
                Agree to these Terms and our{' '}
                <Link
                  href='/privacy-notice'
                  className='text-blue-600 hover:underline'
                >
                  Privacy Notice
                </Link>
                .
              </li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              2. Your Responsibilities
            </h3>
            <p>When using AlgoDetox, you agree to:</p>
            <ul className='list-disc list-inside'>
              <li>Use the Platform only for lawful purposes.</li>
              <li>
                Not engage in any activity that disrupts or interferes with the
                Platform.
              </li>
              <li>Respect the privacy and rights of other users.</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              3. Our Services
            </h3>
            <p>
              AlgoDetox provides tools and resources to help you reduce digital
              addiction and improve your digital wellbeing. We strive to:
            </p>
            <ul className='list-disc list-inside'>
              <li>Offer a safe, ad-free, and privacy-focused experience.</li>
              <li>Continuously improve our Platform based on user feedback.</li>
            </ul>
            <p>
              However, we cannot guarantee that the Platform will always be
              error-free or uninterrupted.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              4. Intellectual Property
            </h3>
            <p>
              All content on the Platform, including text, graphics, logos, and
              software, is owned by AlgoDetox or its licensors and is protected
              by intellectual property laws. You may not copy, modify, or
              distribute any content without our prior written consent.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              5. Limitation of Liability
            </h3>
            <p>
              AlgoDetox is provided "as is" without any warranties, express or
              implied. We are not liable for:
            </p>
            <ul className='list-disc list-inside'>
              <li>
                Any indirect, incidental, or consequential damages arising from
                your use of the Platform.
              </li>
              <li>Any loss of data, profits, or business opportunities.</li>
            </ul>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              6. Termination
            </h3>
            <p>
              We reserve the right to suspend or terminate your access to the
              Platform at any time, with or without notice, for any reason,
              including violation of these Terms.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              7. Changes to These Terms
            </h3>
            <p>
              We may update these Terms from time to time. If we make
              significant changes, we will notify you by email or through the
              Platform. Your continued use of AlgoDetox after the changes take
              effect constitutes your acceptance of the updated Terms.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              8. Governing Law
            </h3>
            <p>
              These Terms are governed by the laws of British Columbia, Canada,
              without regard to its conflict of laws principles. Any disputes
              will be resolved in the courts of British Columbia, Canada.
            </p>

            <h3 className='text-xl font-semibold text-gray-900 mt-6'>
              Contact Us
            </h3>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <p>
              <strong>Email</strong>: support@algodetox.com
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
