export interface AnswerType {
    id: string;
    title: string;
};

export interface ExamOptionsProps {
    answers: AnswerType[];
    onPressAfterSubmit: () => void;
    answerId: string;
}