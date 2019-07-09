import T from 'prop-types';
import React from 'react';
import { TouchableHighlight, TouchableOpacity } from 'react-native';
import { getHitSlop } from './helpers.js';

const noop = () => {};

const Button = ({
    onPress,
    onLongPress,
    children,
    style,
    useHighlight,
    hitSlop,
    ...props,
}) => {
    if (useHighlight) {
        return (
            <TouchableHighlight
                onLongPress={onLongPress}
                onPress={onPress}
                style={style}
                hitSlop={hitSlop}
                {...props}
            >
                {children}
            </TouchableHighlight>
        );
    };

    return (
        <TouchableOpacity
            onLongPress={onLongPress}
            onPress={onPress}
            style={style}
            hitSlop={getHitSlop(hitSlop)}
            {...props}
        >
            {children}
        </TouchableOpacity>
    );
};

Button.propTypes = {
    onPress: T.func,
    children: T.any,
    style: T.any,
    onLongPress: T.bool,
    hitSlop: T.oneOfType([T.number, T.object]),
};

export default Button;