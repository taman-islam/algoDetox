'use client';

import { useState } from 'react';
import { Check, X } from 'lucide-react';
import { useQuizStore } from '../store';

export function QuizComponent({
  onComplete,
}: {
  onComplete: (needsDetox: boolean) => void;
}) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const setQuizCompleted = useQuizStore((state) => state.setQuizCompleted);

  const questions = [
    'Do you often feel like there’s never enough time in the day?',
    'Do you struggle to focus on tasks that matter to you?',
    'Do you frequently feel mentally drained, even after resting?',
    'Do you often feel dissatisfied or unfulfilled with your daily life?',
    'Do you find it hard to be fully present with family and friends?',
    'Do you feel anxious or restless when you don’t have your phone with you?',
  ];

  const handleAnswer = (answer: boolean) => {
    setAnswers((prev) => [...prev, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      const yesCount = answers.filter((answer) => answer).length;
      onComplete(yesCount >= 3);
      setQuizCompleted(true);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
          {questions[currentQuestion]}
        </h2>
        <div className='flex justify-center space-x-4'>
          <button
            onClick={() => handleAnswer(true)}
            className='flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-600 hover:bg-green-700 transition-transform transform hover:scale-105'
          >
            <Check className='h-5 w-5 mr-2' /> Yes
          </button>
          <button
            onClick={() => handleAnswer(false)}
            className='flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-red-600 hover:bg-red-700 transition-transform transform hover:scale-105'
          >
            <X className='h-5 w-5 mr-2' /> No
          </button>
        </div>
        <p className='mt-4 text-sm text-gray-500'>
          Question {currentQuestion + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}
