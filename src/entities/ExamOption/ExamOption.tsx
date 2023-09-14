import React, { useState } from "react";
import { WHITE, TRANSPARENT } from "shared/const";
import Option from "shared/ui/Option";
import styles from "./ExamOption.styles";
import SuccessIcon from "shared/ui/icons/SuccessIcon";
import ChosenIcon from "shared/ui/icons/ChosenIcon";
import FailureIcon from "shared/ui/icons/FailureIcon";
import { CorrespondingOtionConfigType, ExamOptionProps } from "./types";

const ExamOption = ({ id, text, selectedOptionId, isRightOption, isWrongOption } : ExamOptionProps) => {

    const [isSelected, setIsSelected] = useState(false)

    const handleOptionSelect = () => {
        setIsSelected(true)
    }

    const handleOptionUnselect = () => {
        setIsSelected(false)
    }

    const correspondingOtionConfig : CorrespondingOtionConfigType | null = isRightOption
        ? {
            Icon: <SuccessIcon width={15} height={15} fill={WHITE}/>,
            additionalIconWrapperStyleSelected: styles.successIconWrapper,
            additionalContainerStyle: styles.successContainer,
            additionalTextStyle: styles.successText
        }
        : isWrongOption
        ? {
            Icon: <FailureIcon width={15} height={15} fill={WHITE}/>,
            additionalIconWrapperStyleSelected: styles.failureIconWrapper,
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
            id={id}
            text={text}
            isSelected={isSelected}
            Icon={correspondingOtionConfig?.Icon}
            additionalIconWrapperStyleSelected={correspondingOtionConfig?.additionalIconWrapperStyleSelected}
            onPress={handleOptionSelect}
            additionalContainerStyle={correspondingOtionConfig?.additionalContainerStyle}
            additionalTextStyle={correspondingOtionConfig?.additionalTextStyle}
        />
    )
};

export default ExamOption;