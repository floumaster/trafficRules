import { TextStyle, ViewStyle } from "react-native";

export interface CorrespondingOtionConfigType {
    Icon: JSX.Element;
    additionalIconWrapperStyleSelected: ViewStyle;
    additionalContainerStyle: ViewStyle;
    additionalTextStyle: TextStyle;
}

export interface ExamOptionProps {
    id?: string;
    text?: string;
    selectedOptionId?: string;
    isRightOption?: boolean;
    isWrongOption?: boolean;
}