import shuffle from "../../../utils/shuffle.ts";
import BackgroundShapeRenderer, {SHAPE_COLORS, SHAPE_OPTIONS} from "./BackgroundShapeRenderer.tsx";
import React from "react";
import useWindowSize from "../../../hooks/useWindowSize.ts";

export interface RandomBackgroundShapeRendererProps {
    s: string;
    x: number;
    y: number;
    mousePositionRef: React.RefObject<{ x: number; y: number }>;
}

export default function RandomBackgroundShapeRenderer(props: RandomBackgroundShapeRendererProps) {
    const [windowWidth, windowHeight] = useWindowSize();
    const {s, x, y, mousePositionRef} = props;

    // Random properties
    // Memoize to avoid changing on re-renders
    const color = React.useMemo(() => shuffle([...SHAPE_COLORS])[0], []);
    const moveDirection = React.useMemo(() => Math.random() * Math.PI * 2, []);
    const invertMouseMovement = React.useMemo(() => Math.random() > 0.5, []);
    const mouseMagnitude = React.useMemo(() => Math.random() * 10 + 10, []);
    const driftSpeed = React.useMemo(() => Math.random() * 0.04 - 0.02, []);
    const driftMagnitude = React.useMemo(() => Math.random() * 5 + 5, []);
    const scale = React.useMemo(() => Math.random() * 0.2 + 0.9, []);

    return (
        <BackgroundShapeRenderer
            shape={s as typeof SHAPE_OPTIONS[number]}
            color={color}

            offsetX={x * windowWidth}
            offsetY={y * windowHeight}
            scale={scale}

            moveDirection={moveDirection}

            mousePositionRef={mousePositionRef}
            mouseMagnitude={mouseMagnitude}
            invertMouseMovement={invertMouseMovement}

            driftSpeed={driftSpeed}
            driftMagnitude={driftMagnitude}
        />
    );
}