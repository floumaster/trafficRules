import { AnswerType } from "features/ExamOptions/types";

export interface QuestionType {
    id: string;
    title: string;
    pictureUrl: string | null;
    answers: AnswerType[];
};