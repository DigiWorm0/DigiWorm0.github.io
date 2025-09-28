import {Application, extend} from "@pixi/react";
import {Container, Graphics} from "pixi.js";
import BackgroundShapesRenderer from "./BackgroundShapesRenderer.tsx";
import {Box} from "@mui/material";
import React from "react";
import FadeDelay from "../../common/FadeDelay.tsx";

extend({
    Container,
    Graphics
});

export default function BackgroundCanvas() {
    const boxRef = React.useRef<HTMLDivElement>(null);

    return (
        <FadeDelay>
            <Box
                ref={boxRef}
                sx={{
                    opacity: 0.3,
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    pointerEvents: "auto",
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