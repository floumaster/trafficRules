import React, { FC } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./CommonButton.style";
import { CommonButtonProps } from "./types";
import { SUBMIT_BUTTON_TEXT } from "shared/const";


const CommonButton: FC<CommonButtonProps> = ({
    additionalContainerStyle,
    onPress,
    text = SUBMIT_BUTTON_TEXT,
    additionalTextStyle,
    leftIcon,
    additionalLeftIconContainerStyle,
    rightIcon,
    additionalRightIconContainerStyle,
    isDisabled
}) => {

    return (
        <TouchableOpacity style={
                additionalContainerStyle ?
                [styles.container, additionalContainerStyle]
                : styles.container
            }
            onPress={onPress}
            disabled={isDisabled}
        >
            {leftIcon && <View style={
                    additionalLeftIconContainerStyle ?
                    [styles.leftIconContainer, additionalLeftIconContainerStyle]
                    : styles.leftIconContainer
                }
            >
                {leftIcon}
            </View>}
            <Text style={
                    additionalTextStyle ?
                    [styles.text, additionalTextStyle]
                    : styles.text
                }
            >
                {text}
            </Text>
            {rightIcon && <View style={
                    additionalRightIconContainerStyle ?
                    [styles.rightIconContainer, additionalRightIconContainerStyle]
                    : styles.rightIconContainer}
                >
                {rightIcon}
            </View>}
        </TouchableOpacity>
    )
};

export default CommonButton;