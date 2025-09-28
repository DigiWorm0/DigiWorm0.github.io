import React from "react";

export default function useWindowSize(): [number, number] {
    const [width, setWidth] = React.useState<number>(window.innerWidth);
    const [height, setHeight] = React.useState<number>(window.innerHeight);

    const onResize = React.useCallback(() => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }, []);

    React.useEffect(() => {
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [onResize]);

    return [width, height];
}