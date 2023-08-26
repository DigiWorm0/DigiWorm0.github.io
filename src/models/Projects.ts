export interface Project {
    name: string;
    description: string;
    url: string;
    tags: string[];
}

const MyProjects: Project[] = [
    {
        name: "LevelImposter Mod",
        description: "Unity mod for the popular game Among Us that allows users to play on custom maps.",
        url: "https://github.com/DigiWorm0/LevelImposter",
        tags: [".NET", "Unity", "Firebase"]
    },
    {
        name: "LevelImposter Editor",
        description: "Web application for users to develop their own maps for the LevelImposter mod.",
        url: "https://github.com/DigiWorm0/LevelImposter-Editor",
        tags: ["TypeScript", "React", "Firebase"]
    },
    {
        name: "BlitzScouter",
        description: "Android app for users to record, analyze, and share robotics match stats.",
        url: "https://github.com/NB-Blitz/BlitzScouter",
        tags: ["TypeScript", "React Native", "Android"]
    },
    {
        name: "BlitzScouter (Legacy)",
        description: "Older version of BlitzScouter as an ASP.NET MVC web application.",
        url: "https://github.com/NB-Blitz/BlitzScouter-Old",
        tags: ["ASP.NET MVC", "SQL"]
    },
    {
        name: "AP Hunger Games",
        description: "Web application for AP students to play a comedic Hunger Games simulation.",
        url: "https://github.com/DigiWorm0/APHG",
        tags: ["TypeScript", "React"]
    },
    {
        name: "SuperMario.WTF",
        description: "Web application for users to play a funny, online multiplayer SMB1 spinoff.",
        url: "https://github.com/DigiWorm0/MarioTank",
        tags: ["JavaScript", "Socket.IO"]
    },
    {
        name: "Simple Booth's Multiplier",
        description: "A simple, online implementation of Booth's Multiplication Algorithm.",
        url: "https://github.com/DigiWorm0/SimpleBoothsMultiplier",
        tags: ["TypeScript", "React"]
    },
    {
        name: "This Website",
        description: "My personal portfolio website to showcase my projects and skills.",
        url: "https://github.com/DigiWorm0/digiworm0.github.io",
        tags: ["TypeScript", "React"]
    }
];

export default MyProjects;

const ContributedProjects: Project[] = [
    {
        name: "BlitzLib",
        description: "Java library for use in the FIRST Robotics Competition (FRC).",
        url: "https://github.com/NB-Blitz/BlitzLibrary",
        tags: ["Java", "Robotics"]
    },
    {
        name: "FRC Robot Code",
        description: "Java code for the robot used by the FIRST Robotics Competition (FRC) team, New Berlin Blitz.",
        url: "https://github.com/NB-Blitz/2022-RapidReact",
        tags: ["Java", "Robotics"]
    },
    {
        name: "Crowded Mod",
        description: "Unity mod for the popular game Among Us that allows users to play with more than 15 players.",
        url: "https://github.com/CrowdedMods/CrowdedMod",
        tags: [".NET", "Unity"]
    }
];

export { ContributedProjects };