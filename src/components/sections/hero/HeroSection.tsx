import NameTagText from "./NameTagText";
import BioText from "./BioText.tsx";
import {Grid} from "@mui/material";

export default function HeroSection() {
    return (
        <Grid size={12}>
            <NameTagText/>
            <BioText/>
        </Grid>
    );
}