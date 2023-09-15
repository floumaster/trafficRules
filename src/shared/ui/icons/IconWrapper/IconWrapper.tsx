import React, { FC } from "react";
import { TouchableOpacity } from "react-native";
import styles from "./IconWrapper.style";
import { IconWrapperProps } from "./types";

const IconWrapper: FC<IconWrapperProps> = ({style, onPress, disabled, children}) => {
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