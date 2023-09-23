import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import ExamOptions from 'features/ExamOptions';
import ExamQuestion from 'entities/ExamQuestion';
import { data } from 'shared/const/data';
import styles from './Exam.style';
import { QuestionType, UserProgressType, RightAnswerType } from './types';
import ExamProgressBar from 'features/ExamPropgressBar/ExamPropgressBar';

const questions: QuestionType[] = data[0].questions.slice(0, 20);

const answers: RightAnswerType[] = questions.map(question => {
    return {
        questionId: question.id,
        rightAnswerId: question?.answers[Math.floor(Math.random()*question?.answers.length)].id
    }
})

const Exam = () => {

    const [currentQuestionId, setCurrentQuestionId] = useState<string>('@theme-153c4jwlmkqw7xk/@question-153c4jwlmkqw7xl');
    const [userProgress, setUserProgress] = useState<UserProgressType[]>(questions.map(question => {
        return {
            questionId: question.id,
            answerId: null
        }
    }));

    const setQuestionId = useCallback((questionId: string) => {
        setCurrentQuestionId(questionId);
    }, [])

    const getQuestionById = useCallback(() => {
        return questions.find(question => question.id === currentQuestionId)
    }, [currentQuestionId]);

    const currentQuestion = getQuestionById();

    const getAnswerIdByQuestionId = useCallback((id: string) => {
        return answers.find(answer => answer.questionId === id)?.rightAnswerId;
    }, [])

    const currentRightAnswerId = getAnswerIdByQuestionId(currentQuestionId);

    const getUpdatedUserProgressWithAnswer = useCallback((answerId: string) => {
        return userProgress.map(item => {
            if(item.questionId === currentQuestionId)
                return {
                    ...item,
                    answerId
                };
            else return item;
        })
    }, [currentQuestionId]);

    const switchToNextQuestion = useCallback(() => {
        const currentQuestionIndex = questions.findIndex(question => question.id === currentQuestionId);
        if(currentQuestionIndex >= 0 && currentQuestionIndex < questions.length - 1){
            const nextQuestionId = questions[currentQuestionIndex + 1].id;
            setCurrentQuestionId(nextQuestionId);
        }
    }, [currentQuestionId])

    const answerCurrentQuestion = useCallback((answerId: string) => {
        const updatedUserProgressWithAnswer = getUpdatedUserProgressWithAnswer(answerId);
        setUserProgress(updatedUserProgressWithAnswer);
        switchToNextQuestion();
    }, [currentQuestionId]);

    return (
        <View style={styles.container}>
            <ExamProgressBar
                userProgress={userProgress}
                goToQuestion={setQuestionId}
                currentQuestionId={currentQuestionId}
                rightAnswers={answers}
            />
            <ExamQuestion text={currentQuestion?.title}/>
            <ExamOptions
                answers={currentQuestion?.answers}
                answerQuestion={answerCurrentQuestion}
                answerId={currentRightAnswerId}
                userProgress={userProgress.find(item => item.questionId === currentQuestionId)}
                currentQuestionId={currentQuestionId}
            />
        </View>
    )
};

export default Exam;