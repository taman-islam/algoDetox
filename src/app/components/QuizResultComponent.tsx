import { memo } from 'react';
import { QUIZ_QUESTIONS, useQuizStore } from '../store';
import { useShallow } from 'zustand/react/shallow';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export const QuizResults = memo(() => {
  const { quizScore, reset } = useQuizStore(
    useShallow((state) => ({
      quizScore: state.quizScore,
      reset: state.reset,
    })),
  );
  const totalPossibleScore = QUIZ_QUESTIONS.length * 5; // Max score per question is 5
  const scorePercentage = (quizScore / totalPossibleScore) * 100;

  // Determine the color and icon based on the score percentage
  let colorClass = '';
  let icon = null;
  let emoji = '';
  if (scorePercentage >= 70) {
    colorClass = 'text-red-600'; // Red for high scores (70% or higher)
    icon = <XCircle className='h-8 w-8 text-red-600' />;
    emoji = '🚨';
  } else if (scorePercentage >= 40) {
    colorClass = 'text-yellow-600'; // Yellow for medium scores (40-69%)
    icon = <AlertCircle className='h-8 w-8 text-yellow-600' />;
    emoji = '⚠️';
  } else {
    colorClass = 'text-green-600'; // Green for low scores (below 40%)
    icon = <CheckCircle className='h-8 w-8 text-green-600' />;
    emoji = '✅';
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
        <CardDescription className={colorClass}>
          {icon} {getResult(scorePercentage)} {emoji}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Color-Coded Progress Bar */}
        <motion.div
          className='w-full bg-gray-200 h-2 rounded-full mb-4'
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={`h-2 rounded-full transition-all ${
              scorePercentage >= 70
                ? 'bg-red-600'
                : scorePercentage >= 40
                ? 'bg-yellow-600'
                : 'bg-green-600'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${scorePercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        <p>
          Your score: <span className={colorClass}>{quizScore}</span> out of{' '}
          {totalPossibleScore}
        </p>
      </CardContent>
      <CardFooter>
        <Button onClick={() => (window.location.href = '#cta')}>
          Learn More
        </Button>
        <Button variant='outline' onClick={() => reset()}>
          Take the Quiz Again
        </Button>
      </CardFooter>
    </Card>
  );
});

const getResult = (scorePercentage: number) => {
  if (scorePercentage >= 70) {
    return "It looks like digital habits are significantly impacting your well-being. Here's how to start your AlgoDetox journey.";
  } else if (scorePercentage >= 40) {
    return 'Your habits are strong, but there’s room for improvement. Here’s how to strengthen them further.';
  } else {
    return 'You have excellent control over your digital habits! Keep up the good work.';
  }
};
