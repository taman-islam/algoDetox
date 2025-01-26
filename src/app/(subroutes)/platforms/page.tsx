'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { AlertTriangle, ShieldCheck } from 'lucide-react';
import { CollapsibleDisclaimer } from '@/components/collapsible-disclaimer';
import { type Website, websites } from './websiteData';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function Platforms() {
  const [selectedPlatform, setSelectedPlatform] = useState<string>(
    websites[0].name,
  );

  return (
    <div className='min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
      <div className='max-w-4xl mx-auto'>
        <h1 className='text-3xl font-extrabold text-gray-900 text-center mb-8'>
          Navigating Popular Platforms
        </h1>
        <p className='text-xl text-gray-600 text-center mb-12'>
          Understanding the risks of social media and adopting a more
          restrictive approach for digital wellbeing
        </p>
        <p className='text-sm text-gray-500 text-center mb-8'>
          Note: Icons used are representative and not official brand logos.
        </p>

        <div className='mb-8'>
          <p className='text-sm font-medium text-gray-700 mb-2'>
            Select a platform to view details:
          </p>
          <Select value={selectedPlatform} onValueChange={setSelectedPlatform}>
            <SelectTrigger
              className='w-full'
              style={{
                color:
                  websites.find((site) => site.name === selectedPlatform)
                    ?.badge === 'Avoid'
                    ? 'rgb(239, 68, 68)' // text-red-500
                    : websites.find((site) => site.name === selectedPlatform)
                        ?.badge === 'Use with caution'
                    ? 'rgb(249, 115, 22)' // text-orange-500
                    : 'rgb(234, 179, 8)', // text-yellow-500
              }}
            >
              <SelectValue placeholder='Select a platform' />
            </SelectTrigger>
            <SelectContent>
              {websites.map((site) => (
                <SelectItem key={site.name} value={site.name}>
                  <div className='flex items-center'>
                    <site.icon className='h-5 w-5 mr-2 text-gray-500' />
                    <span
                      className={`
                        ${
                          site.badge === 'Avoid'
                            ? 'text-red-500'
                            : site.badge === 'Use with caution'
                            ? 'text-orange-500'
                            : 'text-yellow-500'
                        }
                      `}
                    >
                      {site.name}
                    </span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className='space-y-12'>
          {selectedPlatform &&
            websites
              .filter((site) => site.name === selectedPlatform)
              .map((site) => <PlatformCard key={site.name} site={site} />)}
        </div>
        <div className='mt-12'>
          <CollapsibleDisclaimer />
        </div>
      </div>
    </div>
  );
}

const PlatformCard = ({ site }: { site: Website }) => {
  return (
    <Card key={site.name}>
      <CardHeader>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <site.icon className='h-8 w-8 text-gray-500' />
            <CardTitle className='text-2xl font-bold'>{site.name}</CardTitle>
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
  );
};
