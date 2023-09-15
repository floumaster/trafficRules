import React, { ReactNode } from "react";
import { ViewStyle } from "react-native"

export interface IconWrapperProps {
    children: ReactNode;
    style?: ViewStyle;
    onPress?: () => void;
    disabled?: boolean;
}