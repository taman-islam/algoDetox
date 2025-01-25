'use client';

import { useState } from 'react';
import { Brain } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';

export default function JoinWaitlist() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!email || !name) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      // Here you would typically call your API to add the user to the waitlist
      // For demonstration, we'll just simulate a successful API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setSubmitted(true);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  if (submitted) {
    return (
      <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
        <div className='sm:mx-auto sm:w-full sm:max-w-md'>
          <div className='flex justify-center'>
            <Brain className='h-12 w-12 text-blue-600' />
          </div>
          <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
            Thank You!
          </h2>
          <p className='mt-2 text-center text-sm text-gray-600'>
            You've been added to our waitlist. We'll notify you when algoDetox
            is ready!
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className='min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-md'>
        <div className='flex justify-center'>
          <Brain className='h-12 w-12 text-blue-600' />
        </div>
        <h2 className='mt-6 text-center text-3xl font-extrabold text-gray-900'>
          Join the Waitlist
        </h2>
        <p className='mt-2 text-center text-sm text-gray-600'>
          Be the first to know when algoDetox launches and reclaim your digital
          well-being.
        </p>
      </div>

      <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
        <Card>
          <CardHeader>
            <CardTitle>Sign Up for Updates</CardTitle>
            <CardDescription>
              Enter your details to join our waitlist
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <Label htmlFor='name'>Name</Label>
                <Input
                  id='name'
                  name='name'
                  type='text'
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className='mt-1'
                />
              </div>
              <div>
                <Label htmlFor='email'>Email address</Label>
                <Input
                  id='email'
                  name='email'
                  type='email'
                  autoComplete='email'
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className='mt-1'
                />
              </div>
              <Button type='submit' className='w-full'>
                Join Waitlist
              </Button>
            </form>

            {error && (
              <Alert variant='destructive' className='mt-4'>
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
