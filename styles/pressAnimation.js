import {useAnimatedStyle, useSharedValue, withTiming} from "react-native-reanimated";

// TODO: TAKES IN AN COMPONENT AND MAKES IT RETURN AN OBJECT THAT SCALES ON CLICK

import React from 'react';

const PressAnimation = () => {
    const scale = useSharedValue(1)
    const styles = useAnimatedStyle(()=> ({
        transform: [{
            scaleX: withTiming(scaleX.value * 2),
            scaleY: withTiming(scaleY.value * 2)
        }]
    }))

    return (
        <>
        </>
    );
};

export default PressAnimation;
