import {animated, easings, useSpring} from '@react-spring/web';
import WavingHand from "./WavingHand";

export default function NameTagText() {
    const hiTextStyle = useSpring({
        delay: 150,
        from: {opacity: 0, y: -30},
        to: {opacity: 1, y: 0},
        config: {
            duration: 100,
            easing: easings.linear
        }
    });
    const imTextStyle = useSpring({
        delay: 800,
        from: {opacity: 0, y: -30},
        to: {opacity: 1, y: 0},
        config: {
            duration: 100,
            easing: easings.linear
        }
    });
    const nameTextStyle = useSpring({
        from: {
            opacity: 0,
            scale: 0.4,
            x: 0,
            y: 0,
            rotate: 0,
            textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
        },
        to: [
            {
                opacity: 1, scale: 1.3, x: 10, y: -2, rotate: -10,
                textShadow: "0px 0px 10px rgba(0, 170, 255, 0.3)",
            },
            {
                delay: 0, scale: 1, x: 0, y: 0, rotate: 0,
                textShadow: "0px 0px 0px rgba(0, 0, 0, 0)",
            }
        ],
        config: {
            easing: easings.easeOutQuad
        },
        delay: 1200
    });

    return (
        <h1
            style={{fontSize: 58}}
            aria-label={"Hi, I'm Digi"}
        >
            <animated.span
                aria-hidden={true}
                style={{
                    ...hiTextStyle,
                    display: "inline-block"
                }}
            >
                <WavingHand/>
                Hi,&nbsp;
            </animated.span>
            <animated.span
                aria-hidden={true}
                style={{
                    ...imTextStyle,
                    display: "inline-block"
                }}
            >
                I'm&nbsp;
            </animated.span>
            <animated.span
                aria-hidden={true}
                style={{
                    ...nameTextStyle,
                    display: "inline-block",
                    fontWeight: "bold",
                    color: "#00aaff",
                }}
            >
                Austin
            </animated.span>
        </h1>
    )
}