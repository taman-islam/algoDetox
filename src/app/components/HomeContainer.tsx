'use client';

import { HomeComponent } from './Home';
import { useQuizStore } from '../store';
import { QuizComponent } from './QuizComponent';

export function HomeContainer() {
  const quizCompleted = useQuizStore((state) => state.quizCompleted);
  return (
    <div className='min-h-screen bg-gradient-to-b from-blue-50 to-white'>
      {quizCompleted ? (
        <HomeComponent />
      ) : (
        <QuizComponent onComplete={() => {}} />
      )}
    </div>
  );
}
