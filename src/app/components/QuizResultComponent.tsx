import { memo } from 'react';
import { useQuizStore } from '../store';
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

type AddictionName = 'severe' | 'moderate' | 'mild' | 'none';

type Result = {
  addiction: AddictionName;
  title: string;
  description: string;
};

export const QuizResults = memo(() => {
  const { quizScore, reset, questions } = useQuizStore(
    useShallow((state) => ({
      quizScore: state.quizScore,
      reset: state.reset,
      questions: state.getQuestions(),
    })),
  );

  const totalPossibleScore = questions.length * 2;
  const scorePercentage = (quizScore / totalPossibleScore) * 100;
  const result = getResult(scorePercentage);
  const { textColorClass, icon, emoji, bgColorClass } =
    StyleByAddiction[result.addiction];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Quiz Results</CardTitle>
        <CardDescription className={textColorClass}>
          {icon} {result.title} {emoji}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <motion.div
          className='w-full bg-gray-200 h-2 rounded-full mb-4'
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className={`h-2 rounded-full transition-all ${bgColorClass}`}
            initial={{ width: 0 }}
            animate={{ width: `${scorePercentage}%` }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>
        <p>
          Your score: <span className={textColorClass}>{quizScore}</span> out of{' '}
          {totalPossibleScore}
        </p>
      </CardContent>
      <CardFooter>
        {result.addiction !== 'mild' && (
          <Button onClick={() => (window.location.href = '#cta')}>
            Learn More
          </Button>
        )}
        <Button variant='outline' onClick={() => reset()}>
          Take the Quiz Again
        </Button>
      </CardFooter>
    </Card>
  );
});

const getResult = (scorePercentage: number): Result => {
  if (scorePercentage >= 70) {
    return {
      addiction: 'severe',
      title: 'AlgoDetox is for you',
      description:
        "It looks like digital habits are significantly impacting your well-being. Here's how to start your AlgoDetox journey.",
    };
  } else if (scorePercentage >= 40) {
    return {
      addiction: 'moderate',
      title: 'Your habits are strong, but there’s room for improvement.',
      description: 'Here’s how to strengthen them further.',
    };
  } else if (scorePercentage > 0) {
    return {
      addiction: 'mild',
      title:
        'You have great control over your digital habits! But you can still improve with AlgoDetox.',
      description: 'Keep up the good work.',
    };
  } else {
    return {
      addiction: 'none',
      title:
        'You have excellent control over your digital habits! You don’t need AlgoDetox.  ',
      description: 'Keep up the good work.',
    };
  }
};

const StyleByAddiction: Record<
  AddictionName,
  {
    textColorClass: string;
    icon: React.ReactNode;
    emoji: string;
    bgColorClass: string;
  }
> = {
  severe: {
    textColorClass: 'text-red-600',
    icon: <XCircle className='h-8 w-8 text-red-600' />,
    emoji: '🚨',
    bgColorClass: 'bg-red-600',
  },
  moderate: {
    textColorClass: 'text-yellow-600',
    icon: <AlertCircle className='h-8 w-8 text-yellow-600' />,
    emoji: '⚠️',
    bgColorClass: 'bg-yellow-600',
  },
  mild: {
    textColorClass: 'text-green-600',
    icon: <CheckCircle className='h-8 w-8 text-green-600' />,
    emoji: '🌱',
    bgColorClass: 'bg-green-600',
  },
  none: {
    textColorClass: 'text-green-600',
    icon: <CheckCircle className='h-8 w-8 text-green-600' />,
    emoji: '✅',
    bgColorClass: 'bg-green-600',
  },
};
