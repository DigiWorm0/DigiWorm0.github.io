import React from 'react';

export interface FadeInProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    slide?: boolean;
}

function FadeIn(props: FadeInProps) {
    const animationName = props.slide ? "slideIn" : "fadeIn";
    return (
        <div
            style={{
                animation: `${animationName} ${props.duration ?? 0.6}s ease-in-out ${props.delay ?? 0}s`,
                animationFillMode: "forwards",
                opacity: 0
            }}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;
