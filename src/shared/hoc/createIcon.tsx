import React, { FC } from "react";
import { ViewStyle } from "react-native";
import IconWrapper from "shared/ui/icons/IconWrapper";
import { SvgProps } from "react-native-svg";

interface IconSizeProps {
    width?: number;
    height?: number;
}

interface IconComponentProps extends IconSizeProps{
    color?: string;
    alpha?: number;
    fill?: string;
    opacity?: number;
    style?: ViewStyle;
    onPress?: () => void;
    disabled?: boolean;
    rest?: any[];
}

export default (Icon : FC<SvgProps>, { width: widthDefault, height: heightDefault } : IconSizeProps = {}) => {
    const IconComponent = ({ color, alpha, fill, opacity, style, onPress, width, height, disabled, ...rest } : IconComponentProps) : JSX.Element => (
        <IconWrapper style={style} onPress={onPress} disabled={disabled}>
            <Icon
                width={width || widthDefault}
                height={height || heightDefault}
                color={color}
                fill={fill}
                opacity={alpha || opacity}
                {...rest}
            />
        </IconWrapper>
    );

    return IconComponent;
};