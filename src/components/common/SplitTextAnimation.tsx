import React from "react";

export interface SplitTextAnimationProps {
    text: string;
    splitMethod: "word" | "character"; // Method to split the text
    getComponent: (part: string, index: number) => React.ReactNode; // Optional custom component for each part
}

export default function SplitTextAnimation(props: SplitTextAnimationProps) {
    const splitText = React.useMemo(() => {
        const {text, splitMethod} = props;

        // Split by whitespace
        if (splitMethod === "word")
            return text.split(/\s+/);

        // Split by character
        return text.split('');
    }, [props]);

    return (
        <span aria-label={props.text}>
            {splitText.map((part, index) => (
                <span
                    key={index}
                    aria-hidden={true}
                >
                    {props.getComponent(part, index)}
                </span>
            ))}
        </span>
    );
}