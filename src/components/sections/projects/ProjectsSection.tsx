import ProjectCard from "./ProjectCard";
import Project from "../../../types/Project";
import {Grid} from "@mui/material";
import FadeDelay from "../../common/FadeDelay.tsx";
import TypingTextAnimation from "../../common/TypingTextAnimation.tsx";

export interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection(props: ProjectsSectionProps) {
    return (
        <FadeDelay delay={2000}>
            <h2>
                <TypingTextAnimation
                    interval={50}
                    delay={2000}
                    text={"I make software"}
                />
            </h2>
            <Grid
                container
                spacing={{xs: 2, md: 3}}
                columns={{xs: 4, sm: 8, md: 12}}
            >
                {props.projects.map((project, index) => (
                    <Grid
                        key={project.id}
                        size={{xs: 2, sm: 4, md: 4}}
                    >
                        <FadeDelay
                            key={project.id}
                            delay={2000 + index * 100}
                        >
                            <ProjectCard project={project}/>
                        </FadeDelay>
                    </Grid>
                ))}
            </Grid>
        </FadeDelay>
    )
}