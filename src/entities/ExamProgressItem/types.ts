import { RightAnswerType } from "widgets/Exam/types";

export interface ExamProgressItemProps {
    number: number;
    answerId: string | null;
    goToQuestion: (questionId: string) => void;
    id: string;
    currentQuestionId: string;
    rightAnswers: RightAnswerType[];
};