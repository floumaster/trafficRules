import { ViewStyle, TextStyle } from "react-native"

export interface CommonButtonProps {
    additionalContainerStyle: ViewStyle | ViewStyle[];
    onPress?: () => void;
    text?: string;
    additionalTextStyle?: TextStyle;
    leftIcon?: JSX.Element;
    additionalLeftIconContainerStyle?: ViewStyle;
    rightIcon?: JSX.Element;
    additionalRightIconContainerStyle?: ViewStyle;
}