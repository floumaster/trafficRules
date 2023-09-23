import { UserProgressType } from "widgets/Exam/types";

export interface AnswerType {
    id: string;
    title: string;
};

export interface ExamOptionsProps {
    answers: AnswerType[];
    answerQuestion: (answerId: string) => void;
    answerId: string;
    userProgress: UserProgressType;
    currentQuestionId: string;
}