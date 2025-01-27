'use client';

import { memo, useState } from 'react';
import { AddictionName, QuizResult, useQuizStore } from '../quizStore';
import { QuizResults } from './QuizResultComponent';
import { Button } from '@/components/ui/button';
import { ArrowLeftIcon, Brain } from 'lucide-react';
import { useShallow } from 'zustand/react/shallow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getResult } from '../quizStore';

export function QuizComponent() {
  const quizCompleted = useQuizStore((state) => state.quizCompleted);
  const quizScore = useQuizStore((state) => state.quizScore);
  const result = getResult(quizScore);
  console.log(result, quizScore);
  return (
    <section className='py-20'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <QuizCard isComplete={quizCompleted} result={result} />
      </div>
    </section>
  );
}

const QuickQuiz = memo(() => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const { setQuizCompleted, setAnswer, calculateQuizScore } = useQuizStore(
    useShallow((state) => ({
      setQuizCompleted: state.setQuizCompleted,
      setAnswer: state.setAnswer,
      calculateQuizScore: state.calculateQuizScore,
    })),
  );
  const questions = useQuizStore((state) => state.getQuestions());

  const handlePrevious = () => {
    setCurrentQuestion((prev) => Math.max(0, prev - 1));
  };

  const handleAnswer = (rating: number) => {
    setAnswer(currentQuestion, rating);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setQuizCompleted(true);
      calculateQuizScore();
    }
  };

  const progress = questions.length
    ? (currentQuestion / questions.length) * 100
    : 100;

  const RATNG_LABELS = ['Never', 'Sometimes', 'Always'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <p className=' text-sm text-gray-500'>
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='w-full bg-gray-200 h-2 rounded-full'>
          <div
            className='bg-blue-600 h-2 rounded-full transition-all'
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </CardContent>
      <CardContent>
        <h2 className='text-2xl font-bold text-gray-900 mb-8'>
          {questions[currentQuestion].question}
        </h2>
        <div className='flex justify-between space-x-2'>
          {[0, 1, 2].map((rating) => (
            <div
              key={rating}
              className='flex flex-col items-center justify-center'
            >
              <button
                className={`flex items-center justify-center w-12 h-12 border rounded-full transition-all ${
                  rating === questions[currentQuestion].answer
                    ? 'bg-blue-100 border-blue-500 text-blue-700'
                    : 'border-gray-300 text-gray-700 hover:bg-blue-100 hover:border-blue-500'
                }`}
                key={rating}
                onClick={() => handleAnswer(rating)}
                aria-pressed={rating === questions[currentQuestion].answer}
              >
                {rating}
              </button>
              <span className='text-sm text-gray-500'>
                {RATNG_LABELS[rating]}
              </span>
            </div>
          ))}
        </div>

        <div className='flex justify-between mt-4'>
          <Button
            onClick={handlePrevious}
            disabled={currentQuestion === 0}
            variant='outline'
          >
            <ArrowLeftIcon className='w-4 h-4' />
            Previous
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

const QuizCard = memo(
  ({ isComplete, result }: { isComplete: boolean; result: QuizResult }) => {
    const needAlgoDetox = useQuizStore((state) => state.needsAlgoDetox());
    const title = isComplete
      ? needAlgoDetox
        ? result.title
        : 'You have excellent control over your digital habits'
      : 'Do you need an AlgoDetox?';

    const description = !isComplete
      ? 'We don’t store or sell your data. This quiz data is yours, and it deletes as you refresh this page'
      : needAlgoDetox
      ? result.description
      : 'Keep up the good work and consider joining our mission to help others!';

    return (
      <div className='flex flex-col items-center justify-center'>
        <div className='text-center mb-12'>
          <h1 className='text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl'>
            {title}
          </h1>
          <h2 className='text-3xl font-bold'>
            {isComplete && subTitle[result.addiction]}
          </h2>
          <p className='mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            {description}
          </p>
        </div>
        <div className='max-w-2xl'>
          {isComplete ? <QuizResults /> : <QuickQuiz />}
        </div>
      </div>
    );
  },
);

const subTitle: Record<AddictionName, React.ReactElement> = {
  severe: <span className='text-green-600'> Reclaim Your Life</span>,
  moderate: (
    <span className='text-purple-600'>Unlock Your Full Potential.</span>
  ),
  mild: <span className='text-blue-600'>Break Free. Go further.</span>,
  none: <span className='text-blue-600'>Congratulations!</span>,
};
