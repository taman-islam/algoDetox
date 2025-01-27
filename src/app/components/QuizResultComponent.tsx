import { memo, useEffect, useState } from 'react';
import { QuizResult, useQuizStore } from '../quizStore';
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
import { CheckCircle, AlertCircle, XCircle, RefreshCcw } from 'lucide-react';
import { motion } from 'framer-motion';
import { AddictionName, getResult } from '../quizStore';
import { MAX_POSSIBLE_SCORE } from '../quizStore';
import Link from 'next/link';

export const QuizResults = memo(() => {
  const { quizScore, reset, needsAlgoDetox } = useQuizStore(
    useShallow((state) => ({
      quizScore: state.quizScore,
      reset: state.reset,
      needsAlgoDetox: state.needsAlgoDetox(),
    })),
  );
  const scorePercentage = (quizScore * 100) / MAX_POSSIBLE_SCORE;

  const [result, setResult] = useState<QuizResult | null>(null);
  useEffect(() => {
    setResult(getResult(quizScore));
  }, [quizScore]);

  if (!result) return null;

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
          {MAX_POSSIBLE_SCORE}
        </p>
      </CardContent>
      <CardFooter>
        {needsAlgoDetox && (
          <Button>
            <Link href='/recovery-path/personalized-plan'>Start AlgoDetox</Link>
          </Button>
        )}
        <Button className='mx-4' variant='outline' onClick={() => reset()}>
          <RefreshCcw className='h-4 w-4' />
          Retake
        </Button>
      </CardFooter>
    </Card>
  );
});

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
