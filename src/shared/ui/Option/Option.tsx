import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Option.style";
import { DEFAULT_OPTION_TEXT } from "shared/const";
import { OptionProps } from "./types";

const Option = ({
    isSelected = true,
    text = DEFAULT_OPTION_TEXT,
    onPress,
    additionalContainerStyle,
    additionalContainerStyleSelected,
    additionalTextStyle,
    additionalTextStyleSelected,
    additionalIconWrapperStyle,
    additionalIconWrapperStyleSelected,
    Icon,
    id,
} : OptionProps) : JSX.Element => {

    return (
        <TouchableOpacity
            style={isSelected
                ? [
                    styles.container,
                    styles.containerSelected,
                    additionalContainerStyle,
                    additionalContainerStyleSelected
                ]
                : [styles.container, additionalContainerStyle]}
            onPress={onPress}
            key={id}
        >
            <Text style={isSelected
                ? [
                    styles.text,
                    styles.textSelected,
                    additionalTextStyle,
                    additionalTextStyleSelected
                ]
                : [styles.text, additionalTextStyle]}>
                {text}
            </Text>
            <View style={isSelected
                ? [
                    styles.iconWrapper,
                    styles.iconWrapperSelected,
                    additionalIconWrapperStyle,
                    additionalIconWrapperStyleSelected
                ]
                : [styles.iconWrapper, additionalIconWrapperStyle]}>
                {
                    Icon ? Icon : (
                        isSelected &&
                            <View style={isSelected
                                ? [styles.whitePoint, styles.whitePointSelected]
                                : styles.whitePoint}
                            />
                    )
                }
            </View>
        </TouchableOpacity>
    )
};

export default Option;