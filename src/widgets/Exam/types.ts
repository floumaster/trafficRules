import { AnswerType } from "features/ExamOptions/types";

export interface UserProgressType {
    questionId: string;
    answerId: string | null;
};

export interface QuestionType {
    id: string;
    title: string;
    pictureUrl: string | null;
    answers: AnswerType[];
};

export interface RightAnswerType {
    questionId: string;
    rightAnswerId: string;
};