import HeroSection from "./components/sections/hero/HeroSection.tsx";
import ProjectsSection from "./components/sections/projects/ProjectsSection";
import ProjectsDB from "./db/ProjectsDB";
import ProjectModal from "./components/modals/ProjectModal";
import BackgroundCanvas from "./components/sections/background/BackgroundCanvas.tsx";
import {Box, Container} from "@mui/material";
import RoboticsSection from "./components/sections/robots/RoboticsSection.tsx";
import SkillsSection from "./components/sections/skills/SkillsSection.tsx";
import SkillsDB from "./db/SkillsDB.ts";
import shuffle from "./utils/shuffle.ts";
import ContactSection from "./components/sections/contact/ContactSection.tsx";
import HomeLabSection from "./components/sections/homelab/HomeLabSection.tsx";
import HomeLabDB from "./db/HomeLabDB.ts";
import RobotsDB from "./db/RobotsDB.ts";

function App() {
    return (
        <Box
            sx={{
                position: "relative",
                minHeight: "100vh",
                overflowH: "hidden",
                paddingTop: 15
            }}
        >
            <BackgroundCanvas/>
            <Container
                maxWidth={"md"}
                sx={{
                    backgroundColor: "#111111",
                    boxShadow: "0 0 50px #111111"
                }}
            >
                <HeroSection/>
                <SkillsSection skills={shuffle(SkillsDB)}/>

                <Box sx={{margin: 20}}/>
                <ProjectsSection projects={ProjectsDB}/>

                <Box sx={{margin: 13}}/>
                <RoboticsSection robots={RobotsDB}/>

                <Box sx={{margin: 13}}/>
                <HomeLabSection homeLabs={HomeLabDB}/>

                <Box sx={{margin: 13}}/>
                <ContactSection/>

                <ProjectModal/>
            </Container>
        </Box>
    );
}

export default App;
