import React from 'react';
import { Container } from 'react-bootstrap';
import HeaderSection from "./components/sections/HeaderSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import MyProjects, { ContributedProjects } from "./models/Projects";
import ParticleBackground from "./components/sections/ParticleBackground";

function App() {
    return (
        <>
            <ParticleBackground />
            <Container>
                <HeaderSection />
                <ProjectsSection
                    title="My Projects"
                    projectList={MyProjects}
                />
                <ProjectsSection
                    title="Other Contriutions"
                    projectList={ContributedProjects}
                />
            </Container>
        </>
    );
}

export default App;
