import React from "react";
import {Graphics} from "pixi.js";
import {useTick} from "@pixi/react";
import lerp from "../../../utils/lerp.ts";

// eslint-disable-next-line react-refresh/only-export-components
export const SHAPE_OPTIONS = [
    "square",
    "circle",
    "triangle",
    "x",
    "plus",
    "star",
    "check",
    "hashtag"
] as const;

export const SHAPE_COLORS = [
    "blue",
    "red",
    "green"
] as const;

export interface BackgroundShapeRendererProps {
    offsetX: number;
    offsetY: number;
    scale?: number;

    moveDirection: number;

    // Drift Movement
    driftSpeed: number;
    driftMagnitude: number;

    // Mouse Input
    mousePositionRef: React.RefObject<{ x: number; y: number }>;
    mouseMagnitude: number;
    invertMouseMovement?: boolean;

    shape: typeof SHAPE_OPTIONS[number];
    color: typeof SHAPE_COLORS[number];
}

const SHAPE_DRAW_FUNCTIONS: Record<string, (g: Graphics, color: number) => void> = {
    "circle": (g: Graphics, color: number) => {
        g.clear();
        g.circle(0, 0, 10)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "x": (g: Graphics, color: number) => {
        g.clear();
        g.moveTo(-10, -10)
            .lineTo(10, 10)
            .moveTo(10, -10)
            .lineTo(-10, 10)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "square": (g: Graphics, color: number) => {
        g.clear();
        g.rect(-10, -10, 20, 20)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "triangle": (g: Graphics, color: number) => {
        g.clear();
        g.moveTo(0, -10)
            .lineTo(9, 5)
            .lineTo(-9, 5)
            .closePath()
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "plus": (g: Graphics, color: number) => {
        g.clear();
        g.moveTo(-12, 0)
            .lineTo(12, 0)
            .moveTo(0, -12)
            .lineTo(0, 12)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "star": (g: Graphics, color: number) => {
        g.clear();
        for (let i = 0; i < 6; i++) {
            const angle = (i * Math.PI) / 3;
            g.moveTo(0, 0)
                .lineTo(12 * Math.cos(angle), 12 * Math.sin(angle));
        }
        g.stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "check": (g: Graphics, color: number) => {
        g.clear();
        g.moveTo(-12, 0)
            .lineTo(-3, 9)
            .lineTo(12, -9)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    },
    "hashtag": (g: Graphics, color: number) => {
        g.clear();
        g.moveTo(-10, -4)
            .lineTo(10, -4)
            .moveTo(-10, 4)
            .lineTo(10, 4)
            .moveTo(-4, -10)
            .lineTo(-4, 10)
            .moveTo(4, -10)
            .lineTo(4, 10)
            .stroke({color, width: 4, alignment: 0.5})
            .closePath();
    }
}

const COLOR_MAP: Record<string, number> = {
    "blue": 0x00AAFF,
    "red": 0xBA3E3E,
    "green": 0x3EBA3E,
}

const LERP_SPEED = 0.05;
const SHOW_DEBUG_SHAPES = false;

export default function BackgroundShapeRenderer(props: BackgroundShapeRendererProps) {
    const graphicsRef = React.useRef<Graphics>(null);
    const debugGraphicsRef = React.useRef<Graphics>(null);
    const driftRotationRef = React.useRef<number>(0);

    useTick((ticker) => {
        // Check if the graphics reference is valid
        if (!graphicsRef.current)
            return;

        // Get values from props
        const {
            offsetX,
            offsetY,
            moveDirection,
            mouseMagnitude,
            driftMagnitude
        } = props;
        let mouseX = props.mousePositionRef.current.x;
        let mouseY = props.mousePositionRef.current.y;

        // Scale mouse by the window size, normalized to [-1, 1]
        mouseX = (mouseX / window.innerWidth) * 2 - 1;
        mouseY = (mouseY / window.innerHeight) * 2 - 1;

        // Invert movement if specified
        if (props.invertMouseMovement)
            mouseX = -mouseX;   // <-- Only invert X axis since inverting both will cancel out the effect

        // Scale mouse by the movement direction
        const mouseRotatedX = Math.cos(moveDirection) * mouseX + Math.sin(moveDirection) * mouseY;
        const mouseRotatedY = Math.sin(moveDirection) * mouseX - Math.cos(moveDirection) * mouseY;

        // Apply drift over time
        driftRotationRef.current += ticker.deltaTime * props.driftSpeed;
        driftRotationRef.current %= 2 * Math.PI;

        // Calculate drift movement
        const driftX = Math.cos(moveDirection + driftRotationRef.current);
        const driftY = Math.sin(moveDirection + driftRotationRef.current);

        // Sum the effects to get the target position
        const targetX = offsetX +
            mouseRotatedX * mouseMagnitude +
            driftX * driftMagnitude;

        const targetY = offsetY +
            mouseRotatedY * mouseMagnitude +
            driftY * driftMagnitude;

        // Smoothly interpolate between the current position and the target position
        const currentX = graphicsRef.current.x;
        const currentY = graphicsRef.current.y;

        graphicsRef.current.x = lerp(currentX, targetX, LERP_SPEED * ticker.deltaTime);
        graphicsRef.current.y = lerp(currentY, targetY, LERP_SPEED * ticker.deltaTime);

        // Update debug circle position
        if (!debugGraphicsRef.current)
            return;
        debugGraphicsRef.current.x = offsetX + mouseRotatedX * mouseMagnitude;
        debugGraphicsRef.current.y = offsetY + mouseRotatedY * mouseMagnitude;
    });

    return (
        <>
            {/* Debug Circle to show range */}
            {SHOW_DEBUG_SHAPES && (
                <pixiGraphics
                    eventMode={"none"}
                    ref={debugGraphicsRef}
                    x={props.offsetX}
                    y={props.offsetY}
                    draw={(g) => {
                        g.clear();
                        g.circle(0, 0, props.driftMagnitude)
                            .stroke({color: 0xAAAAAA, width: 2, alignment: 0.5})
                            .closePath();
                    }}
                />
            )}

            {/* Debug Lines to show movement direction and mouse influence */}
            {SHOW_DEBUG_SHAPES && (
                <pixiGraphics
                    eventMode={"none"}
                    x={props.offsetX}
                    y={props.offsetY}
                    draw={(g) => {
                        g.clear();

                        let x = Math.cos(props.moveDirection + Math.PI * 0.5) * props.mouseMagnitude;
                        let y = Math.sin(props.moveDirection + Math.PI * 0.5) * props.mouseMagnitude;

                        g.moveTo(x, y)
                            .lineTo(0, 0)
                            .stroke({color: 0xFF0000, width: 2, alignment: 0.5})
                            .closePath();

                        x = Math.cos(props.moveDirection + Math.PI) * props.mouseMagnitude;
                        y = Math.sin(props.moveDirection + Math.PI) * props.mouseMagnitude;

                        if (props.invertMouseMovement) {
                            x = -x;
                            y = -y;
                        }

                        g.moveTo(x, y)
                            .lineTo(0, 0)
                            .stroke({color: 0x0000FF, width: 2, alignment: 0.5})
                            .closePath();
                    }}
                />
            )}

            {/* Main Shape */}
            <pixiGraphics
                eventMode={"none"}
                ref={graphicsRef}
                x={graphicsRef.current?.x || props.offsetX}
                y={graphicsRef.current?.y || props.offsetY}
                scale={props.scale ?? 1}
                draw={(g) => {
                    const drawFunction = SHAPE_DRAW_FUNCTIONS[props.shape] || SHAPE_DRAW_FUNCTIONS["circle"];
                    const color = COLOR_MAP[props.color] || COLOR_MAP["blue"];
                    drawFunction(g, color);
                }}
            />
        </>
    )
}