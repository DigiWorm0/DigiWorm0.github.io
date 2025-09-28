import React from "react";
import {animated, useSpring} from "@react-spring/web";

export interface FadeDelayProps {
    children: React.ReactNode; // Content to animate
    delay?: number; // Delay before starting the fade-up animation
    duration?: number; // Duration of the fade-up animation in milliseconds
}

export default function FadeDelay(props: FadeDelayProps) {
    const style = useSpring({
        from: {opacity: 0},
        to: {opacity: 1},
        config: {duration: props.duration || 500},
        delay: props.delay || 0,
    });

    return (
        <animated.span style={style}>
            {props.children}
        </animated.span>
    );
}