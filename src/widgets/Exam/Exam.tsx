import React, { useState } from 'react';
import { View } from 'react-native';
import ExamOptions from 'features/ExamOptions';
import ExamQuestion from 'entities/ExamQuestion';
import { data } from 'shared/const/data';
import styles from './Exam.style';
import { QuestionType } from './types';

const Exam = () => {

    const [currenctQustionId, setCurrentQuestionId] = useState<string>('@theme-153c4jwlmkqw7xk/@question-153c4jwlmkqw7xl');

    const questions: QuestionType[] = data[0].questions;

    const currentQuestion: QuestionType | undefined = questions.find(question => question.id === currenctQustionId);
    
    const answers = currentQuestion?.answers;

    const switchToNextQuestion = () => {
        const currenctQuestionIndex = questions.findIndex(question => question.id === currenctQustionId)
        setCurrentQuestionId(questions[currenctQuestionIndex + 1].id)
    };

    const randomAnswerId = currentQuestion?.answers[Math.floor(Math.random()*currentQuestion?.answers.length)].id

    return (
        <View style={styles.container}>
            <ExamQuestion text={currentQuestion?.title}/>
            <ExamOptions answers={answers} onPressAfterSubmit={switchToNextQuestion} answerId={randomAnswerId} />
        </View>
    )
};

export default Exam;