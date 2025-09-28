import {animated, easings, useSpring} from "@react-spring/web";

export default function WavingHand() {
    const style = useSpring({
        from: {rotate: 0},
        to: [
            {rotate: -13},
            {rotate: 0},
            {rotate: -13},
            {rotate: 0},
            {rotate: -13},
            {rotate: 0},
        ],
        config: {
            duration: 180,
            easing: easings.easeInOutQuad
        },
    });

    return (
        <animated.span
            style={{
                ...style,
                display: "inline-block"
            }}
        >
            👋&nbsp;
        </animated.span>
    )
}