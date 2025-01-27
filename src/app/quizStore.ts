import { create } from 'zustand';

export type AddictionName = 'severe' | 'moderate' | 'mild' | 'none';

export type QuizResult = {
  addiction: AddictionName;
  title: string;
  description: string;
};

const QUIZ_QUESTIONS: {
  question: string;
  answer: number;
}[] = [
  {
    question: 'Do you often feel like there’s never enough time in the day?',
    answer: 0,
  },
  {
    question: 'Do you struggle to focus on tasks that matter to you?',
    answer: 0,
  },
  {
    question: 'Do you frequently feel mentally drained, even after resting?',
    answer: 0,
  },
  {
    question:
      'Do you often feel dissatisfied or unfulfilled with your daily life?',
    answer: 0,
  },
  {
    question:
      'Do you find it hard to be fully present with family and friends?',
    answer: 0,
  },
  {
    question:
      'Do you feel anxious or restless when you don’t have your phone with you?',
    answer: 0,
  },
];

export const MAX_POSSIBLE_SCORE = QUIZ_QUESTIONS.length * 2;

interface QuizStore {
  quizCompleted: boolean;
  quizScore: number;
  reset: () => void;
  questions: {
    question: string;
    answer: number;
  }[];
  setAnswer: (questionIndex: number, answer: number) => void;
  setQuizCompleted: (quizCompleted: boolean) => void;
  calculateQuizScore: () => void;
  getQuestions: () => {
    question: string;
    answer: number;
  }[];
  needsAlgoDetox: () => boolean;
}

export const useQuizStore = create<QuizStore>((set, get) => ({
  quizCompleted: false,
  quizScore: 0,
  questions: QUIZ_QUESTIONS,
  getQuestions: () => get().questions,
  reset: () => {
    const newQuestions = QUIZ_QUESTIONS.map((question) => ({
      ...question,
      answer: 0,
    }));
    set({
      quizCompleted: false,
      quizScore: 0,
      questions: newQuestions,
    });
  },
  setQuizCompleted: (quizCompleted: boolean) => set({ quizCompleted }),
  setAnswer: (questionIndex: number, answer: number) => {
    const newQuestions = [...get().questions];
    newQuestions[questionIndex].answer = answer;
    set({ questions: newQuestions });
  },
  calculateQuizScore: () =>
    set({
      quizScore: get().questions.reduce((acc, question) => {
        return acc + question.answer;
      }, 0),
    }),
  needsAlgoDetox: () => {
    const score = get().quizScore;
    const isComplete = get().quizCompleted;
    return isComplete && !['none', 'mild'].includes(getResult(score).addiction);
  },
}));

export const getResult = (score: number): QuizResult => {
  const scorePercentage = (score * 100) / MAX_POSSIBLE_SCORE;
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
      title: 'You’re Doing Well, But You Can Do Better',
      description:
        'Your digital habits are good, but small changes can lead to big improvements. Let’s help you achieve more focus and balance.',
    };
  } else if (scorePercentage > 0) {
    return {
      addiction: 'mild',
      title:
        'You have great control over your digital habits! But you can still improve with AlgoDetox',
      description: 'Keep up the good work.',
    };
  } else {
    return {
      addiction: 'none',
      title:
        'You have excellent control over your digital habits! You don’t need AlgoDetox',
      description: 'Keep up the good work.',
    };
  }
};
