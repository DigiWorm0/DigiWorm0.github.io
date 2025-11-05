import {Application, extend} from "@pixi/react";
import {Container, Graphics} from "pixi.js";
import BackgroundShapesRenderer from "./BackgroundShapesRenderer.tsx";
import {Box} from "@mui/material";
import React from "react";
import FadeDelay from "../../common/FadeDelay.tsx";
import useWindowSize from "../../../hooks/useWindowSize.ts";

extend({
    Container,
    Graphics
});


const MIN_WINDOW_WIDTH = 800;

export default function BackgroundCanvas() {
    const boxRef = React.useRef<HTMLDivElement>(null);
    const [windowWidth] = useWindowSize();

    return (
        <FadeDelay>
            <Box
                ref={boxRef}
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "auto",
                    transition: "opacity 1s",
                    opacity: windowWidth < MIN_WINDOW_WIDTH ? 0 : 0.3,
                    zIndex: -1, // Ensure the background is behind other content
                }}
            >
                <Application
                    resizeTo={boxRef}
                    backgroundAlpha={0}
                    antialias={true}
                >
                    <BackgroundShapesRenderer/>
                </Application>
            </Box>
        </FadeDelay>
    )
}