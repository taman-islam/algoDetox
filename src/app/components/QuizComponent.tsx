'use client';

import { memo, useState } from 'react';
import { QUIZ_QUESTIONS, useQuizStore } from '../store';
import { QuizResults } from './QuizResultComponent';

export function QuizComponent() {
  const quizCompleted = useQuizStore((state) => state.quizCompleted);
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <QuizCard isComplete={quizCompleted} />
      </div>
    </section>
  );
}

const QuickQuiz = memo(() => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const setQuizCompleted = useQuizStore((state) => state.setQuizCompleted);
  const setAnswer = useQuizStore((state) => state.setAnswer);
  const calculateQuizScore = useQuizStore((state) => state.calculateQuizScore);

  const handleAnswer = (rating: number) => {
    setAnswer(currentQuestion, rating);
    if (currentQuestion < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
      calculateQuizScore();
    }
  };

  const progress = ((currentQuestion + 1) / QUIZ_QUESTIONS.length) * 100;

  return (
    <div>
      {/* Progress Bar */}
      <div className='w-full bg-gray-200 h-2 rounded-full'>
        <div
          className='bg-blue-600 h-2 rounded-full transition-all'
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Quiz Content */}
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
          {QUIZ_QUESTIONS[currentQuestion].question}
        </h2>
        <div className='flex justify-center space-x-2'>
          {[0, 1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleAnswer(rating)}
              className='flex items-center justify-center w-12 h-12 border border-gray-300 rounded-full text-gray-700 hover:bg-blue-100 hover:border-blue-500 transition-all'
            >
              {rating}
            </button>
          ))}
        </div>
        <div className='mt-4 flex justify-between text-sm text-gray-500'>
          <span>Never</span>
          <span>Always</span>
        </div>
        <p className='mt-4 text-sm text-gray-500'>
          Question {currentQuestion + 1} of {QUIZ_QUESTIONS.length}
        </p>
      </div>
    </div>
  );
});

const QuizCard = memo(({ isComplete }: { isComplete: boolean }) => {
  return (
    <>
      <div className='text-center mb-12'>
        <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
          Break Free from Digital Addiction.
          <span className='text-blue-600'> Reclaim Your Life.</span>
        </h1>
        <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
          {isComplete
            ? 'AlgoDetox helps you escape the dopamine traps of social media and addictive apps through a personalized 30-day detox plan, daily check-ins, and mindful reintroduction.'
            : 'Take our quick quiz to see if you need an AlgoDetox, and start your journey to digital well-being.'}
        </p>
      </div>
      <div className='max-w-lg mx-auto'>
        {isComplete ? <QuizResults /> : <QuickQuiz />}
      </div>
    </>
  );
});
