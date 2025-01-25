import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleDisclaimer } from '@/components/collapsible-disclaimer';
import { intrusiveFeatures } from './intrusiveFeatures';

export const metadata = {
  title: 'Detecting Intrusive Apps | AlgoDetox',
  description:
    'Learn how to identify apps that may be intruding on your digital well-being and focus.',
  openGraph: {
    title: 'Detecting Intrusive Apps | AlgoDetox',
    description:
      'Learn how to identify apps that may be intruding on your digital well-being and focus.',
    type: 'website',
    url: 'https://AlgoDetox.com/intrusive-app-detection',
    image: '/og-image.png', // Make sure to add an appropriate Open Graph image
  },
};

export default function IntrusiveAppDetection() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Detecting Intrusive Apps
        </h1>
        <p className='text-xl text-gray-600 text-center mb-12'>
          Learn to identify features that may be intruding on your digital
          well-being and focus.
        </p>

        <div className='bg-white shadow overflow-hidden sm:rounded-lg mb-8'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Why This Matters
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>
                Many apps are designed to capture and hold your attention, often
                at the expense of your well-being and productivity. By learning
                to recognize these intrusive features, you can make more
                informed decisions about which apps to use and how to use them
                mindfully.
              </p>
            </div>
          </div>
        </div>

        <div className='space-y-12'>
          {intrusiveFeatures.map((feature) => (
            <Card key={feature.name}>
              <CardHeader>
                <div className='flex items-center space-x-4'>
                  <feature.icon className='h-8 w-8 text-gray-500' />
                  <CardTitle className='text-2xl font-bold'>
                    {feature.name}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <p className='text-gray-600'>{feature.description}</p>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Common Examples:
                    </h4>
                    <ul className='list-disc pl-5 space-y-1 mt-2'>
                      {feature.examples.map((example, index) => (
                        <li key={index} className='text-gray-600'>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className='font-semibold text-gray-900'>
                      Potential Impact:
                    </h4>
                    {feature.impacts.map((impact, index) => (
                      <li key={index} className='text-gray-600'>
                        {impact}
                      </li>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-12 mb-8'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              Taking Action
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>
                Now that you can identify these intrusive features, consider the
                following steps:
              </p>
              <ul className='list-disc pl-5 mt-2 space-y-1'>
                <li>
                  Regularly audit the apps on your devices and uninstall those
                  with multiple intrusive features.
                </li>
                <li>
                  For necessary apps with intrusive elements, look for
                  alternative apps or web versions that might be less
                  manipulative.
                </li>
                <li>
                  Adjust settings where possible to minimize intrusive features
                  (e.g., turning off autoplay or most notifications).
                </li>
                <li>
                  Use built-in device features or third-party apps to set limits
                  on app usage and monitor your digital habits.
                </li>
                <li>
                  Practice mindfulness when using apps, being aware of how they
                  make you feel and how they impact your time and attention.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='bg-white shadow overflow-hidden sm:rounded-lg mt-12 mb-8'>
          <div className='px-4 py-5 sm:p-6'>
            <h3 className='text-lg leading-6 font-medium text-gray-900'>
              A Call to Engineers and Developers
            </h3>
            <div className='mt-2 max-w-xl text-sm text-gray-500'>
              <p>
                Engineers and developers have a critical role in shaping the
                digital environment we interact with. To create a more mindful
                digital world, we urge developers to:
              </p>
              <ul className='list-disc pl-5 mt-2 space-y-1'>
                <li>
                  Prioritize user well-being and focus by designing apps that
                  respect users’ time and attention.
                </li>
                <li>
                  Avoid integrating manipulative features like excessive
                  notifications, autoplay, and gamification that exploit
                  psychological vulnerabilities.
                </li>
                <li>
                  Always give users clear, simple options to opt-out of any
                  intrusive features.
                </li>
                <li>
                  Design apps that help users build healthy, productive habits
                  rather than relying on engagement-driven tactics.
                </li>
                <li>
                  Be transparent about data collection and respect user privacy
                  by minimizing unnecessary tracking and sharing.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-12'>
          <CollapsibleDisclaimer />
        </div>
      </div>
    </div>
  );
}
