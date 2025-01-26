'use client';

import { useState } from 'react';
import { type IntrusiveFeature, intrusiveFeatures } from './intrusiveFeatures';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CollapsibleDisclaimer } from '@/components/collapsible-disclaimer';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, CheckCircle2, Info } from 'lucide-react';

export function IntrusiveAppDetectionComponent() {
  const [selectedFeature, setSelectedFeature] = useState<IntrusiveFeature>(
    intrusiveFeatures[0],
  );

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

        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='text-lg font-medium text-gray-900 flex items-center'>
              <Info className='w-5 h-5 mr-2 text-blue-500' />
              Why This Matters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-gray-500'>
              Many apps are designed to capture and hold your attention, often
              at the expense of your well-being and productivity. By learning to
              recognize these intrusive features, you can make more informed
              decisions about which apps to use and how to use them mindfully.
            </p>
          </CardContent>
        </Card>

        <div className='mb-8'>
          <h2 className='text-2xl font-bold text-gray-900 mb-4'>
            Feature Details
          </h2>
          <p className='text-sm font-medium text-gray-700 mb-2'>
            Select a feature to view details:
          </p>
          <Select
            value={selectedFeature.name}
            onValueChange={(value) => {
              const feature = intrusiveFeatures.find(
                (f) => f.name === value,
              ) as IntrusiveFeature;
              setSelectedFeature(feature);
            }}
          >
            <SelectTrigger className='w-full'>
              <SelectValue placeholder='Select a feature' />
            </SelectTrigger>
            <SelectContent>
              {intrusiveFeatures.map((feature) => (
                <SelectItem key={feature.name} value={feature.name}>
                  <div className='flex items-center'>
                    <feature.icon className='w-5 h-5 mr-2 text-gray-500' />
                    {feature.name}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-12 mb-12'>
          <IntrusiveFeatureCard feature={selectedFeature} />
        </div>

        <Card className='mb-8'>
          <CardHeader>
            <CardTitle className='text-lg font-medium text-gray-900 flex items-center'>
              <CheckCircle2 className='w-5 h-5 mr-2 text-green-500' />
              Taking Action
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className='text-sm text-gray-500 mb-4'>
              Now that you can identify these intrusive features, consider the
              following steps:
            </p>
            <ul className='list-disc pl-5 space-y-2 text-sm text-gray-500'>
              <li>
                Regularly audit the apps on your devices and uninstall those
                with multiple intrusive features.
              </li>
              <li>
                For necessary apps with intrusive elements, look for alternative
                apps or web versions that might be less manipulative.
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
          </CardContent>
        </Card>

        <div className='mt-12'>
          <CollapsibleDisclaimer />
        </div>
      </div>
    </div>
  );
}

const IntrusiveFeatureCard = ({ feature }: { feature: IntrusiveFeature }) => {
  return (
    <Card key={feature.name}>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <feature.icon className='h-8 w-8 text-gray-500' />
            <CardTitle className='text-2xl font-bold'>{feature.name}</CardTitle>
          </div>
          <Badge variant='destructive' className='text-sm'>
            Intrusive Feature
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-6'>
          <p className='text-gray-600'>{feature.description}</p>
          <div>
            <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
              <AlertTriangle className='w-5 h-5 mr-2 text-yellow-500' />
              Common Examples:
            </h4>
            <ul className='list-disc pl-5 space-y-1'>
              {feature.examples.map((example, index) => (
                <li key={index} className='text-gray-600'>
                  {example}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className='font-semibold text-gray-900 mb-2 flex items-center'>
              <AlertTriangle className='w-5 h-5 mr-2 text-red-500' />
              Potential Impact:
            </h4>
            <ul className='list-disc pl-5 space-y-1'>
              {feature.impacts.map((impact, index) => (
                <li key={index} className='text-gray-600'>
                  {impact}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
