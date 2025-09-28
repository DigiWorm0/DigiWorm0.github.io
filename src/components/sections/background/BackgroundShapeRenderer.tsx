import React from "react";
import {Graphics} from "pixi.js";
import {useTick} from "@pixi/react";
import lerp from "../../../utils/lerp.ts";

export interface BackgroundShapeRendererProps {
    offsetX: number;
    offsetY: number;

    moveDirection: number;
    driftSpeed: number;

    mousePositionRef: React.RefObject<{ x: number; y: number }>;

    shape: "square" | "circle" | "triangle" | "x";
    color: "blue" | "red" | "green";
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
}

const COLOR_MAP: Record<string, number> = {
    "blue": 0x00AAFF,
    "red": 0xBA3E3E,
    "green": 0x3EBA3E,
}

const MOUSE_WEIGHT = 20;
const SPEED = 0.05;
const DRIVE_MAGNITUDE = 0.5;


export default function BackgroundShapeRenderer(props: BackgroundShapeRendererProps) {
    const graphicsRef = React.useRef<Graphics>(null);
    const driftOffsetRef = React.useRef<number>(0);

    useTick((ticker) => {
        // Check if the graphics reference is valid
        if (!graphicsRef.current)
            return;

        // Get the mouse position and offset values
        const {offsetX, offsetY, moveDirection} = props;
        let mouseX = props.mousePositionRef.current.x;
        let mouseY = props.mousePositionRef.current.y;

        // Scale mouse by the window size, normalized to [-1, 1]
        mouseX = (mouseX / window.innerWidth) * 2 - 1;
        mouseY = (mouseY / window.innerHeight) * 2 - 1;

        // Calculate drift
        driftOffsetRef.current += ticker.deltaTime * props.driftSpeed;
        driftOffsetRef.current %= 2 * Math.PI;

        // Scale mouse by the movement direction
        const moveX =
            Math.cos(moveDirection) * mouseX +
            Math.sin(moveDirection) * mouseY +
            Math.cos(moveDirection + driftOffsetRef.current) * DRIVE_MAGNITUDE;

        const moveY =
            Math.sin(moveDirection) * mouseX -
            Math.cos(moveDirection) * mouseY +
            Math.sin(moveDirection + driftOffsetRef.current) * DRIVE_MAGNITUDE;


        // Target position is shape offset with a weighted mouse offset
        const targetX = moveX * MOUSE_WEIGHT + offsetX;
        const targetY = moveY * MOUSE_WEIGHT + offsetY;

        // Smoothly interpolate between the current position and the target position
        const currentX = graphicsRef.current.x;
        const currentY = graphicsRef.current.y;

        graphicsRef.current.x = lerp(currentX, targetX, SPEED * ticker.deltaTime);
        graphicsRef.current.y = lerp(currentY, targetY, SPEED * ticker.deltaTime);
    });

    return (
        <pixiGraphics
            eventMode={"none"}
            ref={graphicsRef}
            x={graphicsRef.current?.x || props.offsetX}
            y={graphicsRef.current?.y || props.offsetY}
            draw={(g) => {
                const drawFunction = SHAPE_DRAW_FUNCTIONS[props.shape] || SHAPE_DRAW_FUNCTIONS["circle"];
                const color = COLOR_MAP[props.color] || COLOR_MAP["blue"];
                drawFunction(g, color);
            }}
        />
    )
}