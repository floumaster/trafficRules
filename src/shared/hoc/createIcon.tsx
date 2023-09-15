import React, { FC } from "react";
import IconWrapper from "shared/ui/icons/IconWrapper";
import { SvgProps } from "react-native-svg";
import { IconSizeProps, IconComponentProps } from "./types";

export default (Icon: FC<SvgProps>, { width: widthDefault, height: heightDefault }: IconSizeProps = {}) => {
    const IconComponent = ({ color, alpha, fill, opacity, style, onPress, width, height, disabled, ...rest }: IconComponentProps): JSX.Element => (
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