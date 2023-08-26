import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FadeIn from "../util/FadeIn";
import ProjectCard from "../util/ProjectCard";
import { Project } from "../../models/Projects";

export interface ProjectsSectionProps {
    title: string;
    projectList: Project[];
}

function ProjectsSection(props: ProjectsSectionProps) {
    return (
        <FadeIn delay={1}>
            <Container>
                <Row>
                    <Col className={"text-center mt-3"}>
                        <h1><b>{props.title}</b></h1>
                    </Col>
                </Row>
                <div
                    style={{
                        display: "flex",
                        overflowX: "revert",
                        flexWrap: "wrap",
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        paddingBottom: 20,
                        paddingTop: 20,
                        gap: 20
                    }}
                >
                    {props.projectList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            name={project.name}
                            description={project.description}
                            url={project.url}
                            tags={project.tags}
                        />
                    ))}
                </div>
            </Container>
        </FadeIn>
    );
}

export default ProjectsSection;
