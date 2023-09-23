import React, { FC } from "react";
import { TouchableOpacity, Text } from "react-native";
import styles from "./ExamProgressItem.style";
import { ExamProgressItemProps } from "./types";

const ExamProgressItem: FC<ExamProgressItemProps> = ({ number, goToQuestion, answerId, id, currentQuestionId, rightAnswers }) => {

    const additionalItemContainerStyle = currentQuestionId === id
    ? styles.currentItemContainer
    : answerId === rightAnswers.find(answer => answer.questionId === id)?.rightAnswerId
    ? styles.rightItemContainer 
    : answerId && answerId !== rightAnswers.find(answer => answer.questionId === id)?.rightAnswerId
    ? styles.wrongItemContainer
    : null;

    const additionalTextStyle = currentQuestionId === id || answerId ? styles.whiteText : null;

    return (
        <TouchableOpacity style={[styles.container, additionalItemContainerStyle]} activeOpacity={1} onPress={() => goToQuestion(id)}>
            <Text style={additionalTextStyle}>
                {number}
            </Text>
        </TouchableOpacity>
    )
};

export default ExamProgressItem;