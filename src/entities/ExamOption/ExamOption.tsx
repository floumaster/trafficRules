import React, { useState, useEffect } from "react";
import { WHITE, TRANSPARENT } from "shared/const";
import Option from "shared/ui/Option";
import styles from "./ExamOption.styles";
import SuccessIcon from "shared/ui/icons/SuccessIcon";
import ChosenIcon from "shared/ui/icons/ChosenIcon";
import FailureIcon from "shared/ui/icons/FailureIcon";
import { CorrespondingOtionConfigType, ExamOptionProps } from "./types";

const ExamOption = ({ id, text, selectedOptionId, isRightOption, isWrongOption, onPress, isDisabled } : ExamOptionProps) => {

    const [isSelected, setIsSelected] = useState<boolean>(false)

    const handleOptionSelect = (id: string) => {
        setIsSelected(true)
        onPress(id)
    }

    const handleOptionUnselect = () => {
        setIsSelected(false)
    }

    useEffect(() => {
        if(selectedOptionId !== id)
            handleOptionUnselect()
    }, [selectedOptionId])

    const correspondingOtionConfig : CorrespondingOtionConfigType | null = isRightOption
        ? {
            Icon: <SuccessIcon width={15} height={15} fill={WHITE}/>,
            additionalIconWrapperStyle: styles.successIconWrapper,
            additionalContainerStyle: styles.successContainer,
            additionalTextStyle: styles.successText
        }
        : isWrongOption
        ? {
            Icon: <FailureIcon width={15} height={15} fill={WHITE}/>,
            additionalIconWrapperStyle: styles.failureIconWrapper,
            additionalContainerStyle: styles.failureContainer,
            additionalTextStyle: styles.failureText
        }
        : isSelected
        ? {
            Icon: <ChosenIcon width={20} height={20} fill={TRANSPARENT}/>,
            additionalIconWrapperStyleSelected: styles.selectedIconWrapper,
            additionalContainerStyle: styles.selectedContainer,
            additionalTextStyle: styles.selectedText
        }
        : null

    return (
        <Option
            text={text}
            isSelected={isSelected}
            Icon={correspondingOtionConfig?.Icon}
            additionalIconWrapperStyleSelected={correspondingOtionConfig?.additionalIconWrapperStyleSelected}
            onPress={() => handleOptionSelect(id)}
            additionalContainerStyle={correspondingOtionConfig?.additionalContainerStyle}
            additionalTextStyle={correspondingOtionConfig?.additionalTextStyle}
            isDisabled={isDisabled}
            additionalIconWrapperStyle={correspondingOtionConfig?.additionalIconWrapperStyle}
        />
    )
};

export default ExamOption;