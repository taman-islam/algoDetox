import { create } from 'zustand';

const QUIZ_QUESTIONS: {
  question: string;
  answer: boolean;
}[] = [
  {
    question: 'Do you spend more than 2 hours on social media daily?',
    answer: false,
  },
  {
    question: 'Do you find it difficult to stop using social media?',
    answer: false,
  },
];

interface QuizStore {
  quizCompleted: boolean;
  setQuizCompleted: (quizCompleted: boolean) => void;
}

export const useQuizStore = create<QuizStore>((set) => ({
  quizCompleted: false,
  setQuizCompleted: (quizCompleted: boolean) => set({ quizCompleted }),
}));
