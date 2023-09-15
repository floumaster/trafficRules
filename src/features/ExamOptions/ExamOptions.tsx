import React, { useState, FC } from "react";
import { View } from "react-native";
import ExamOption from "entities/ExamOption";
import styles from "./ExamOptions.style";
import PrimaryButton from "shared/ui/PrimaryButton";
import { ExamOptionsProps } from "./types";
import { GO_NEXT_BUTTON_TEXT, SUBMIT_BUTTON_TEXT } from "shared/const";

const ExamOptions: FC<ExamOptionsProps> = ({ answers, onPressAfterSubmit, answerId }) => {

    const [selectedAnswerId, setSelectedAnswerId] = useState<string>('')
    const [rightAnswerId, setRightAnswerId] = useState<string>('')

    const handleSelectAnswer = (id: string) => {
        setSelectedAnswerId(id)
    }

    const clearPreviousResults = () => {
        setSelectedAnswerId('')
        setRightAnswerId('')
    }

    const handleSubmit = () => {
        if(rightAnswerId){
            onPressAfterSubmit()
            clearPreviousResults()
        }
        else if(selectedAnswerId)
            setRightAnswerId(answerId)
    }

    const isOptionListDisabled: boolean = !!rightAnswerId;

    return (
        <View style={styles.container}>
            <View style={styles.answersList}>
                {
                    answers.map(answer => {
                        return (
                            <ExamOption
                                id={answer.id}
                                text={answer.title}
                                selectedOptionId={selectedAnswerId}
                                onPress={handleSelectAnswer}
                                key={answer.id}
                                isDisabled={isOptionListDisabled}
                                isRightOption={answer.id === rightAnswerId}
                                isWrongOption={!!rightAnswerId && answer.id !== rightAnswerId && answer.id === selectedAnswerId}
                            />
                        )
                    })
                }
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton
                    onPress={handleSubmit}
                    isDisabled={!!!selectedAnswerId}
                    text={rightAnswerId ? GO_NEXT_BUTTON_TEXT : SUBMIT_BUTTON_TEXT}
                />
            </View>
        </View>
    )
};

export default ExamOptions;