import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./IconWrapper.style";
import { IconWrapperProps } from "./types";

const IconWrapper = ({children, style, onPress, disabled} : IconWrapperProps) : JSX.Element => {
    return (
        <TouchableOpacity
            style={[styles.container, style]}
            onPress={onPress}
            disabled={!onPress || disabled}
        >
            {children}
        </TouchableOpacity>
    )
};

export default IconWrapper;