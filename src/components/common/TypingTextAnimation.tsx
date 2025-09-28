import FadeDelay from "./FadeDelay.tsx";
import SplitTextAnimation from "./SplitTextAnimation.tsx";

export interface TypingTextAnimationProps {
    text: string; // The text to animate
    delay?: number; // Delay before starting the typing animation
    duration?: number; // Duration per character in milliseconds
    interval?: number; // Interval between characters in milliseconds
}

export default function TypingTextAnimation(props: TypingTextAnimationProps) {
    const delay = props.delay || 0; // Default delay is 0
    const duration = props.duration || 80; // Default duration is 100ms
    const interval = props.interval || 18; // Default interval is 20ms

    return (
        <SplitTextAnimation
            text={props.text}
            splitMethod={"character"}
            getComponent={(part, index) => (
                <FadeDelay
                    key={index}
                    delay={delay + index * interval} // Adjust delay for each character
                    duration={duration}
                >
                    {part}
                </FadeDelay>
            )}
        />
    )
}