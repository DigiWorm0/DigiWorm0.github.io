import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import FadeIn from "../util/FadeIn";

function ParticleBackground() {
    const particlesInit = useCallback(async (engine: Engine) => {
        console.log(engine);
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        console.log(container);
    }, []);

    return (
        <FadeIn delay={1}>
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: "100%",
                    height: "100%"
                }}
            >
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    width={"100%"}
                    height={"100%"}
                    options={{
                        fullScreen: { enable: false },
                        background: {
                            color: {
                                value: "#111111",
                            },
                        },
                        fpsLimit: 120,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: false,
                                    mode: "push",
                                },
                                onHover: {
                                    enable: false,
                                    mode: "repulse",
                                },
                                resize: true,
                            },
                            modes: {
                                push: {
                                    quantity: 4,
                                },
                                repulse: {
                                    distance: 100,
                                    duration: 1,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#333333",
                            },
                            links: {
                                color: "#222222",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: true,
                                speed: 1,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 800,
                                },
                                value: 80,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "triangle",
                            },
                            size: {
                                value: { min: 1, max: 5 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
            </div>
        </FadeIn>
    );
}

export default ParticleBackground;
