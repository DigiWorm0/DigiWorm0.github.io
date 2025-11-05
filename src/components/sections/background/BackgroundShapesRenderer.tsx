import React from "react";
import {SHAPE_OPTIONS} from "./BackgroundShapeRenderer.tsx";
import useWindowSize from "../../../hooks/useWindowSize.ts";
import shuffle from "../../../utils/shuffle.ts";
import {FederatedPointerEvent} from "pixi.js";
import RandomBackgroundShapeRenderer from "./RandomBackgroundShapeRenderer.tsx";

interface ShapePosition {
    x: number;
    y: number;
    s: string;
}


function getRandomShapePosition(x: number, y: number): ShapePosition {
    const RANDOM_RANGE = 0.1;

    return {
        x: Math.random() * RANDOM_RANGE + x - RANDOM_RANGE / 2,
        y: Math.random() * RANDOM_RANGE + y - RANDOM_RANGE / 2,
        s: shuffle([...SHAPE_OPTIONS])[0] as ShapePosition["s"]
    }
}

export default function BackgroundShapesRenderer() {
    const [windowWidth, windowHeight] = useWindowSize();
    const mousePositionRef = React.useRef({x: windowWidth / 2, y: windowHeight / 2});

    const onMouseMove = React.useCallback((e: FederatedPointerEvent) => {
        mousePositionRef.current = {x: e.clientX, y: e.clientY};
    }, []);

    const randomShapePositions = React.useMemo(() => {
        return [
            // Top cluster
            getRandomShapePosition(0.25, 0.08),
            getRandomShapePosition(0.5, 0.12),
            getRandomShapePosition(0.75, 0.08),

            // Left cluster
            getRandomShapePosition(0.08, 0.25),
            getRandomShapePosition(0.12, 0.55),
            getRandomShapePosition(0.08, 0.9),
            getRandomShapePosition(0.12, 1.2),
            getRandomShapePosition(0.08, 1.5),
            getRandomShapePosition(0.12, 1.8),
            getRandomShapePosition(0.08, 2.1),
            getRandomShapePosition(0.12, 2.4),
            getRandomShapePosition(0.08, 2.7),

            // Right cluster
            getRandomShapePosition(0.88, 0.25),
            getRandomShapePosition(0.92, 0.55),
            getRandomShapePosition(0.88, 0.9),
            getRandomShapePosition(0.92, 1.2),
            getRandomShapePosition(0.88, 1.5),
            getRandomShapePosition(0.92, 1.8),
            getRandomShapePosition(0.88, 2.1),
            getRandomShapePosition(0.92, 2.4),
            getRandomShapePosition(0.88, 2.7),
        ];
    }, []);

    return (
        <pixiContainer
            eventMode={"static"}
            onPointerMove={onMouseMove}
            onGlobalPointerMove={onMouseMove}
            onPointerOver={onMouseMove}
            onPointerOut={onMouseMove}
            onPointerUp={onMouseMove}
        >
            {randomShapePositions.map((shape, index) => (
                <RandomBackgroundShapeRenderer
                    s={shape.s}
                    x={shape.x}
                    y={shape.y}
                    key={`background-shape-${index}`}
                    mousePositionRef={mousePositionRef}
                />
            ))}
        </pixiContainer>
    );
}