import { ViewStyle } from "react-native"

export interface IconWrapperProps {
    children: JSX.Element;
    style?: ViewStyle;
    onPress?: () => void;
    disabled?: boolean;
}