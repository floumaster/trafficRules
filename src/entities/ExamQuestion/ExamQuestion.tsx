import React, { FC } from 'react';
import { View, Text } from 'react-native';
import styles from './ExamQuestion.style';
import { ExamQuestionProps } from './types';

const ExamQuestion: FC<ExamQuestionProps> = ({ text }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {text}
            </Text>
        </View>
    )
};

export default ExamQuestion;