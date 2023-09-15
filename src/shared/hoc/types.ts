import { ViewStyle } from "react-native";

export interface IconSizeProps {
    width?: number;
    height?: number;
};

export interface IconComponentProps extends IconSizeProps{
    color?: string;
    alpha?: number;
    fill?: string;
    opacity?: number;
    style?: ViewStyle;
    onPress?: () => void;
    disabled?: boolean;
    rest?: any[];
};