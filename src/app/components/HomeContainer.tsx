'use client';

import { HomeComponent } from './Home';
import { useQuizStore } from '../quizStore';

export function HomeContainer() {
  const quizCompleted = useQuizStore((state) => state.quizCompleted);
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      <HomeComponent quizCompleted={quizCompleted} />
    </div>
  );
}
