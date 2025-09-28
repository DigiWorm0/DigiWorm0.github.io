import FadeDelay from "../../common/FadeDelay.tsx";
import {Button, Grid} from "@mui/material";
import {Email, GitHub} from "@mui/icons-material";

export default function ContactSection() {
    return (

        <FadeDelay delay={2000}>
            <Grid
                sx={{
                    padding: 2,
                    textAlign: "center",
                }}
            >
                <Button
                    variant="outlined"
                    color="secondary"
                    href="mailto:DigiWorm0@pm.me"
                    style={{marginLeft: 20}}
                    size={"small"}
                >
                    <Email style={{verticalAlign: "middle", marginRight: 5}}/>
                    DigiWorm0@pm.me
                </Button>

                <Button
                    variant="outlined"
                    color="primary"
                    href="https://github.com/DigiWorm0/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{marginLeft: 10}}
                    size={"small"}
                >
                    <GitHub style={{verticalAlign: "middle", marginRight: 5}}/>
                    DigiWorm0
                </Button>
            </Grid>
        </FadeDelay>
    )
}