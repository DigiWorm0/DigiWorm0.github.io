import React from "react";
import BackgroundShapeRenderer from "./BackgroundShapeRenderer.tsx";
import useWindowSize from "../../../hooks/useWindowSize.ts";
import shuffle from "../../../utils/shuffle.ts";

interface ShapePosition {
    x: number;
    y: number;
    s: "square" | "circle" | "triangle" | "x";
}

// TODO: Responsive shapes
const SHAPES: ShapePosition[] = [
    // Top cluster
    getRandomShapePosition(0.25, 0.1),
    getRandomShapePosition(0.5, 0.1),
    getRandomShapePosition(0.75, 0.1),

    // Left cluster
    getRandomShapePosition(0.08, 0.3),
    getRandomShapePosition(0.12, 0.55),
    getRandomShapePosition(0.08, 0.9),
    getRandomShapePosition(0.12, 1.2),
    getRandomShapePosition(0.08, 1.5),
    getRandomShapePosition(0.12, 1.8),
    getRandomShapePosition(0.08, 2.1),
    getRandomShapePosition(0.12, 2.4),
    getRandomShapePosition(0.08, 2.7),

    // Right cluster
    getRandomShapePosition(0.88, 0.3),
    getRandomShapePosition(0.92, 0.55),
    getRandomShapePosition(0.88, 0.9),
    getRandomShapePosition(0.92, 1.2),
    getRandomShapePosition(0.88, 1.5),
    getRandomShapePosition(0.92, 1.8),
    getRandomShapePosition(0.88, 2.1),
    getRandomShapePosition(0.92, 2.4),
    getRandomShapePosition(0.88, 2.7),
];

function getRandomShapePosition(x: number, y: number): ShapePosition {
    const RANDOM_RANGE = 0.1;

    return {
        x: Math.random() * RANDOM_RANGE + x - RANDOM_RANGE / 2,
        y: Math.random() * RANDOM_RANGE + y - RANDOM_RANGE / 2,
        s: shuffle(["square", "circle", "triangle", "x"])[0] as ShapePosition["s"]
    }
}

export default function BackgroundShapesRenderer() {
    const [windowWidth, windowHeight] = useWindowSize();
    const mousePositionRef = React.useRef({x: windowWidth / 2, y: windowHeight / 2});

    const onMouseMove = React.useCallback((e: MouseEvent) => {
        mousePositionRef.current = {x: e.clientX, y: e.clientY};
    }, []);

    return (
        <pixiContainer
            eventMode={"static"}
            onPointerMove={onMouseMove}
            onGlobalPointerMove={onMouseMove}
        >
            {SHAPES.map((shape, index) => (
                <BackgroundShapeRenderer
                    key={index}
                    offsetX={shape.x * windowWidth}
                    offsetY={shape.y * windowHeight}
                    mousePositionRef={mousePositionRef}
                    shape={shape.s}
                    moveDirection={Math.random() * Math.PI * 2}
                    driftSpeed={Math.random() * 0.02}
                    color={index % 3 === 0 ? "blue" :
                        index % 3 === 1 ? "red" : "green"}
                />
            ))}
        </pixiContainer>
    );
}