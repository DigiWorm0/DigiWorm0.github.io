import Project from "../../../types/Project";
import {Interweave} from "interweave";
import useSelectedProjectID from "../../../hooks/useSelectedProjectID";
import {Box, ButtonBase, Chip, Grid, Typography} from "@mui/material";
import React from "react";
import SkillsDB from "../../../db/SkillsDB.ts";
import shuffle from "../../../utils/shuffle.ts";

export interface ProjectProps {
    project: Project;
}

function ProjectCard(props: ProjectProps) {
    const {project} = props;
    const [, setSelectedProjectID] = useSelectedProjectID();
    const [isHovered, setIsHovered] = React.useState(false);

    const shuffledTools = React.useMemo(() => shuffle(project.tools), [project.tools]);

    return (
        <ButtonBase
            focusRipple
            onClick={() => setSelectedProjectID(project.id)}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            sx={{
                position: 'relative',
                width: '100%',
                height: 150,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 2,
                overflow: 'hidden',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                backgroundColor: '#151515',
                color: '#ffffff',
                textAlign: 'center',
                transition: 'all 0.1s ease-in-out',
                transform: isHovered ? 'scale(1.05)' : 'scale(1)'
            }}
        >
            <img
                src={`/projects/${project.thumbnailImageURL}`}
                alt={project.name}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'all 0.1s ease-in-out',
                    opacity: isHovered ? 0.45 : 0.2,
                }}
            />
            <Box sx={{zIndex: 1}}>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 'bold',
                        color: '#ffffff',
                        textShadow: '0 0 5px rgba(0, 0, 0, 0.7)',
                        marginTop: 1
                    }}
                >
                    {project.name}
                </Typography>
                <span
                    style={{
                        textShadow: '0 0 5px rgba(0, 0, 0, 0.7)',
                    }}
                >
                    <Interweave content={project.shortDescription}/>
                </span>
                <Grid sx={{
                    marginTop: 1,
                    paddingLeft: 1,
                    paddingRight: 1,
                }}>
                    {shuffledTools.map(tool => {
                        const skill = SkillsDB.find(s => s.name === tool);

                        return (
                            <Chip
                                label={tool}
                                size={"small"}
                                variant={"filled"}
                                color={skill?.color ?? "primary"}
                                sx={{
                                    margin: 0.2,
                                    fontSize: "0.8em",
                                    height: 18
                                }}
                            />
                        );
                    })}
                </Grid>
            </Box>
        </ButtonBase>
    );
}

export default ProjectCard;
