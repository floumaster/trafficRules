import { ViewStyle, TextStyle } from "react-native";

export interface OptionProps {
    isSelected: boolean;
    text?: string;
    onPress?: () => void;
    additionalContainerStyle?: ViewStyle | null;
    additionalContainerStyleSelected?: ViewStyle | null;
    additionalTextStyle?: TextStyle | null;
    additionalTextStyleSelected?: TextStyle | null;
    additionalIconWrapperStyle?: ViewStyle | null;
    additionalIconWrapperStyleSelected?: ViewStyle | null;
    Icon?: JSX.Element | null;
    id?: string | null;
};