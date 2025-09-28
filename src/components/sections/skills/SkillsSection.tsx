import {Chip, Grid} from "@mui/material";
import Skill from "../../../types/Skill.ts";
import FadeDelay from "../../common/FadeDelay.tsx";

export interface SkillsSectionProps {
    skills: Skill[];
}

export default function SkillsSection(props: SkillsSectionProps) {
    return (
        <Grid
            spacing={2}
        >
            {props.skills.map((skill, index) => (
                <FadeDelay
                    key={skill.name}
                    delay={2000 + index * 100}
                >
                    <Chip
                        label={skill.name}
                        size={"small"}
                        variant={"outlined"}
                        color={skill.color}
                        sx={{margin: 0.5}}
                    />
                </FadeDelay>
            ))}
        </Grid>
    )
}