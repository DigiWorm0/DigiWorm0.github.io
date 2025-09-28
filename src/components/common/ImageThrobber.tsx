import React from "react";
import {Box, CircularProgress} from "@mui/material";

export type ImageThrobberProps = React.ImgHTMLAttributes<HTMLImageElement>;

export default function ImageThrobber(props: ImageThrobberProps) {
    const [isLoaded, setLoaded] = React.useState(false);


    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            {!isLoaded && (<CircularProgress/>)}
            <img
                {...props}
                alt={props.alt || 'Loading...'}
                onLoad={() => setLoaded(true)}
            />
        </Box>
    )

}