import { UserProgressType, RightAnswerType } from 'widgets/Exam/types';

export interface ExamProgressBarProps {
    userProgress: UserProgressType[];
    goToQuestion: (questionId: string) => void;
    currentQuestionId: string;
    rightAnswers: RightAnswerType[];
};