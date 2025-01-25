'use client';

import Link from 'next/link';
import { Brain, AlertTriangle } from 'lucide-react';
import { useAuthStore } from '@/lib/store';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const { isLoggedIn, logout } = useAuthStore();

  return (
    <nav className='bg-white shadow-sm'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between h-16'>
          <div className='flex'>
            <Link href='/' className='flex-shrink-0 flex items-center'>
              <Brain className='h-8 w-8 text-blue-600' />
              <span className='ml-2 text-xl font-bold text-gray-800'>
                AlgoDetox
              </span>
            </Link>
          </div>
          <div className='flex items-center space-x-4'>
            <Link
              href='/platforms'
              className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Platform Advisor
            </Link>
            <Link
              href='/intrusive-app-detection'
              className='text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium'
            >
              Intrusive App Detection
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
