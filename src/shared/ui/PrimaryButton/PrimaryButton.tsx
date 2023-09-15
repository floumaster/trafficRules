import React, { FC } from "react";
import CommonButton from "../CommonButton";
import { PrimaryButtonProps } from "./types";
import styles from "./PrimaryButton.style";

const PrimaryButton: FC<PrimaryButtonProps> = ({
    additionalContainerStyle,
    onPress,
    text,
    additionalTextStyle,
    leftIcon,
    additionalLeftIconContainerStyle,
    rightIcon,
    additionalRightIconContainerStyle,
    isDisabled
}) => {
    return (
        <CommonButton 
            additionalContainerStyle={{...styles.container, ...additionalContainerStyle}}
            onPress={onPress}
            text={text}
            additionalTextStyle={{...styles.text, ...additionalTextStyle}}
            leftIcon={leftIcon}
            additionalLeftIconContainerStyle={additionalLeftIconContainerStyle}
            rightIcon={rightIcon}
            additionalRightIconContainerStyle={additionalRightIconContainerStyle}
            isDisabled={isDisabled}
        />
    )
};

export default PrimaryButton;