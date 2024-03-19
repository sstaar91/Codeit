export interface Question {
  id: number;
  subjectId: number;
  content: string;
  like: number;
  dislike: number;
  createdAt: string;
  answer: Answer | null;
}

export interface Answer {
  id: number;
  questionId: number;
  content: string;
  isRejected: boolean;
  createdAt: string;
}
