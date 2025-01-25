import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { CollapsibleDisclaimer } from '@/components/collapsible-disclaimer';
import { websites } from './websiteData';

export default function HarmfulWebsites() {
  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Navigating Potentially Harmful Websites
        </h1>
        <p className='text-xl text-gray-600 text-center mb-12'>
          Understanding the risks of social media and adopting a more
          restrictive approach for digital wellbeing
        </p>
        <p className='text-sm text-gray-500 text-center mb-8'>
          Note: Icons used are representative and not official brand logos.
        </p>

        <div className='space-y-12'>
          {websites.map((site) => (
            <Card key={site.name}>
              <CardHeader>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center space-x-4'>
                    <site.icon className='h-8 w-8 text-gray-500' />
                    <CardTitle className='text-2xl font-bold'>
                      {site.name}
                    </CardTitle>
                  </div>
                  <Badge
                    variant='outline'
                    className={`
                      ${
                        site.badge === 'Avoid'
                          ? 'text-red-500 border-red-500'
                          : site.badge === 'Use with caution'
                          ? 'text-orange-500 border-orange-500'
                          : 'text-yellow-500 border-yellow-500'
                      }
                    `}
                  >
                    {site.badge || 'Use mindfully'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className='space-y-4'>
                  <div>
                    <h3 className='flex items-center text-lg font-semibold text-red-600 mb-2'>
                      <AlertTriangle className='h-5 w-5 mr-2' />
                      Potential Harmful Effects
                    </h3>
                    <ul className='list-disc pl-5 space-y-1'>
                      {site.harmfulEffects.map((effect, index) => (
                        <li key={index} className='text-gray-600'>
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='flex items-center text-lg font-semibold text-green-600 mb-2'>
                      <ShieldCheck className='h-5 w-5 mr-2' />
                      Safe Usage Tips
                    </h3>
                    <ul className='list-disc pl-5 space-y-1'>
                      {site.safeUsage.map((tip, index) => (
                        <li key={index} className='text-gray-600'>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className='text-lg font-semibold text-blue-600 mb-2'>
                      Our Recommendation
                    </h3>
                    <p className='text-gray-600'>{site.recommendation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className='mt-12'>
          <CollapsibleDisclaimer />
        </div>
      </div>
    </div>
  );
}
