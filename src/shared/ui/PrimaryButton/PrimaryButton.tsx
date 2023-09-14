import React from "react";
import CommonButton from "../CommonButton";
import { PrimaryButtonProps } from "./types";
import styles from "./PrimaryButton.style";

const PrimaryButton = ({
    additionalContainerStyle,
    onPress,
    text,
    additionalTextStyle,
    leftIcon,
    additionalLeftIconContainerStyle,
    rightIcon,
    additionalRightIconContainerStyle
} : PrimaryButtonProps) : JSX.Element => {
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
        />
    )
};

export default PrimaryButton;