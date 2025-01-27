import { create } from 'zustand';

export const QUIZ_QUESTIONS: {
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
}

export const useQuizStore = create<QuizStore>((set) => ({
  quizCompleted: false,
  quizScore: 0,
  questions: QUIZ_QUESTIONS,
  reset: () =>
    set({ quizCompleted: false, quizScore: 0, questions: QUIZ_QUESTIONS }),
  setQuizCompleted: (quizCompleted: boolean) => set({ quizCompleted }),
  setAnswer: (questionIndex: number, answer: number) => {
    const newQuestions = [...QUIZ_QUESTIONS];
    newQuestions[questionIndex].answer = answer;
    set({ questions: newQuestions });
  },
  calculateQuizScore: () =>
    set({
      quizScore: QUIZ_QUESTIONS.reduce((acc, question) => {
        return acc + question.answer;
      }, 0),
    }),
}));
