import React from "react";
import {animated, useSpring} from "@react-spring/web";

export interface ModalTransitionProps {
    children: React.ReactElement; // Content to animate
    in?: boolean; // Whether the modal is open or closed

    onEnter?: (node: HTMLElement, isAppearing: boolean) => void;
    onExited?: (node: HTMLElement, isAppearing: boolean) => void;

    duration?: number; // Duration of the fade-up animation in milliseconds
}

export default function ModalTransition(props: ModalTransitionProps) {
    const style = useSpring({
        from: {
            opacity: 0,
            transform: "translateY(-20px)"
        },
        to: {
            opacity: props.in ? 1 : 0,
            transform: props.in ? "translateY(0)" : "translateY(-20px)"
        },
        config: {duration: props.duration || 300},
        reset: true, // Reset the animation when the modal state changes
        onStart: () => {
            if (props.in && props.onEnter)
                props.onEnter(null as never, true);
        },
        onRest: () => {
            if (!props.in && props.onExited)
                props.onExited(null as never, true);
        }
    });

    return (
        <animated.div style={style}>
            {props.children}
        </animated.div>
    )
}