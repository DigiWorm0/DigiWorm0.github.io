import React from "react";

export interface ZoomOnHoverProps {
    children: React.ReactNode;
    scale?: number;
}

export default function ZoomOnHover(props: ZoomOnHoverProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    const scale = props.scale ?? 1.2;

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                transition: 'transform 0.1s ease-in-out',
                transform: isHovered ? `scale(${scale})` : 'scale(1)',
                display: 'inline-block' // Ensure the div wraps tightly around its content
            }}
        >
            {props.children}
        </div>
    );
}