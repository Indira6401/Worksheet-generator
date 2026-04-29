export interface Board {
  id: string;
  name: string;
}

export interface Grade {
  id: string;
  name: string;
}

export interface Subject {
  id: string;
  name: string;
}

export interface WorksheetConfig {
  board?: string;
  grade: string;
  subject: string;
  topicMode?: 'specific' | 'generalized';
  topics: string[];
  difficulty?: string;
  questionType?: string;
  numberOfQuestions?: number;
  purpose?: string;
  fastMode?: boolean;
  premiumMode?: boolean;
}

export interface WorksheetQuestion {
  number: number;
  type: 'mcq' | 'fill_blank' | 'true_false' | 'match' | 'short_answer';
  question: string;
  options?: string[];
  matchColumns?: {
    columnA: string[];
    columnB: string[];
  };
  marks: number;
}

export interface Worksheet {
  title: string;
  questions: WorksheetQuestion[];
  totalMarks: number;
  instructions: string;
  metadata: {
    board: string;
    grade: string;
    subject: string;
    topicMode: string;
    topics: string[];
    difficulty: string;
    questionType: string;
    numberOfQuestions: number;
    purpose: string;
    generatedAt: string;
  };
}

export interface Answer {
  number: number;
  answer: string;
  explanation?: string;
}

export interface AnswerKey {
  answers: Answer[];
}
