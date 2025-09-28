import {Interweave} from "interweave";
import useSelectedProject from "../../hooks/useSelectedProject";
import useSelectedProjectID from "../../hooks/useSelectedProjectID";
import React from "react";
import {Box, Button, Fade, Grid, Modal, Paper} from "@mui/material";
import {GitHub, OpenInNew, YouTube} from "@mui/icons-material";
import ImageThrobber from "../common/ImageThrobber.tsx";

export default function ProjectModal() {
    const [, setSelectedProjectID] = useSelectedProjectID();
    const selectedProject = useSelectedProject();
    const [isVisible, setIsVisible] = React.useState(false);

    React.useEffect(() => {
        setIsVisible(!!selectedProject);
    }, [selectedProject]);

    return (
        <Modal
            open={isVisible}
            onClose={() => setIsVisible(false)}
            closeAfterTransition
        >
            <Fade
                in={isVisible}
                onExited={() => setSelectedProjectID(undefined)}
            >
                <Paper
                    elevation={0}
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        boxShadow: 24,
                        width: "80%",
                        maxWidth: 1000,
                        padding: 3
                    }}
                >
                    <Grid container>
                        <Grid size={6}>
                            <h2 className="fw-bold">
                                {selectedProject?.name}
                            </h2>
                            <span style={{fontSize: 16, lineHeight: "1.4rem"}}>
                                <Interweave content={selectedProject?.fullDescription || ''}/>
                            </span>
                            <Box>
                                {selectedProject?.githubURL && (
                                    <Button
                                        href={selectedProject.githubURL}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        style={{margin: 5}}
                                        size={"small"}
                                        color={"primary"}
                                        variant={"outlined"}
                                    >
                                        <GitHub style={{marginRight: 5}}/>
                                        {selectedProject?.githubName || 'GitHub'}
                                    </Button>
                                )}
                                {selectedProject?.websiteURL && (
                                    <Button
                                        href={selectedProject.websiteURL}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        style={{margin: 5}}
                                        size={"small"}
                                        color={"secondary"}
                                        variant={"outlined"}
                                    >
                                        <OpenInNew style={{marginRight: 5}}/>
                                        {selectedProject?.websiteName || 'Website'}
                                    </Button>
                                )}
                                {selectedProject?.youtubeURL && (
                                    <Button
                                        href={selectedProject.youtubeURL}
                                        target={"_blank"}
                                        rel={"noopener noreferrer"}
                                        style={{margin: 5, marginTop: 5}}
                                        size={"small"}
                                        color={"error"}
                                        variant={"outlined"}
                                    >
                                        <YouTube style={{marginRight: 5}}/>
                                        {selectedProject?.youtubeName || 'YouTube'}
                                    </Button>
                                )}
                            </Box>
                        </Grid>
                        <Grid
                            size={6}
                            sx={{padding: 2}}
                        >
                            <ImageThrobber
                                src={`/projects/${selectedProject?.imageURL}`}
                                alt={selectedProject?.name}
                                style={{
                                    width: 'auto',
                                    maxWidth: '100%',
                                    minHeight: 200,
                                    height: '100%',
                                    objectFit: 'cover',

                                    borderRadius: 8,
                                    boxShadow: '0 0 10px rgba(0, 0, 0, 0.5)',
                                    marginBottom: 10
                                }}
                            />
                        </Grid>
                    </Grid>
                </Paper>
            </Fade>
        </Modal>
    )
}