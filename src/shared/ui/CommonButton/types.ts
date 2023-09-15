import { ReactNode } from "react";
import { ViewStyle, TextStyle } from "react-native"

export interface CommonButtonProps {
    additionalContainerStyle?: ViewStyle | ViewStyle[];
    onPress?: () => void;
    text?: string;
    additionalTextStyle?: TextStyle;
    leftIcon?: ReactNode;
    additionalLeftIconContainerStyle?: ViewStyle;
    rightIcon?: ReactNode;
    additionalRightIconContainerStyle?: ViewStyle;
    isDisabled?: boolean;
}