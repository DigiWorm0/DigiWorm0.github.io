import Project from "../types/Project";

const ProjectsDB: Project[] = [
    {
        id: "devillib",
        tags: ["VEX-U", "Robotics"],
        tools: ["C++"],
        name: "DevilLib",
        shortDescription: "Autonomous robotics library",
        fullDescription: `
            <p>DevilLib is a library made by team DEVIL5 (DevilBots) at the University of Wisconsin-Stout. It's main goal is to provide a variety of tools for performing autonomous routines at VEX-U robotics competitions. These include...</p>
            <ul>
                <li>Linear/Spline Path Planning</li>
                <li>Pose Estimation (Odometry)</li>
                <li>Boomerang Controller</li>
                <li>Basic Pure Pursuit</li>
                <li>Trajectory Planning using motion profiles</li>
                <li>Ramsete Controller</li>
                <li>Feedback Controllers (PID)</li>
                <li>Feedforward Controllers</li>
                <li>Symmetrical Encoder Controller</li>
                <li>Autonomous Selection UI</li>
            </ul>`,

        websiteURL: "https://bluedevilrobotics.org/",
        websiteName: "About Us",
        githubURL: "https://github.com/UWST-Robotics/DevilLib",
        githubName: "View Source",
        youtubeURL: "https://youtu.be/vZrjdwwjtFM?feature=shared&t=79",
        youtubeName: "Autonomous Demo",
        imageURL: "devillib_0.JPG",
        thumbnailImageURL: "devillib_thumb.JPG"
    },
    {
        id: "vexbridge",
        tags: ["VEX-U", "Robotics"],
        tools: ["C++", "TypeScript", "React", "Socket.IO", "KiCad"],
        name: "VEXBridge",
        shortDescription: "RPC over RS-232 w/ custom PCB",
        fullDescription: `
            <p>VEXBridge is a <b>communications library</b> that synchronizes a key-value table across a serial connection. It handles all packet frames, byte stuffing, serialization/deserialization, ack/nack, and packet retransmission. In addition, it provides a web UI using React and Socket.IO to view values in realtime including live charts and a field map for rendering the current path/pose.</p>
            <p>It is primarily used for debugging autonomous routines for VEX-U robotics competitions as well as communicating data from a 3rd-party microcontroller (such as a Raspberry Pi) to the VEX V5 brain for the purpose of vision tracking w/ OpenCV.</p>
            <p>In addition, we designed a <a href="https://github.com/UWST-Robotics/VEXBridge-PCB">custom PCB</a> to handle power and serial communication on VEX's proprietary V5 connection. It provides conversion from RS-485 to RS-232, 5V power regulation, and LED indicators for power and traffic.</p>`,

        websiteURL: "https://bluedevilrobotics.org/",
        websiteName: "About Us",
        githubURL: "https://github.com/UWST-Robotics/VEXBridge",
        githubName: "View Source",
        imageURL: "vexbridge_0.jpg",
        thumbnailImageURL: "vexbridge_thumb.jpg"
    },
    {
        id: "levelimposter",
        tags: ["Mod"],
        tools: ["TypeScript", "React", "Unity", "C#", "Firebase"],
        name: "LevelImposter",
        shortDescription: "Web-based 2D map editing tool",
        fullDescription: `
            <p>LevelImposter is a custom mod for the popular game <em>Among Us</em>, enabling players to build and play entirely custom maps. The project includes a web-based <a href="https://editor.levelimposter.net/">map editor</a> built in <b>React</b>, a Firebase-hosted workshop for sharing and discovering maps, and a Unity/BepInEx (.NET 6) mod that integrates directly with the game. Players can browse and explore community creations through the <a href="https://levelimposter.net/#/maps">LevelImposter website</a>.</p>
            <p>What started as a small personal project grew into a community of nearly <b>2,000</b> map creators, with over <b>50,000</b> map downloads, and <b>millions</b> of impressions on YouTube and Twitch. Popular creators <em>(including <a href="https://www.youtube.com/watch?v=DxzpYr5vFXc">Sidemen</a>, <a href="https://www.youtube.com/watch?v=9W2vC3JKKrU">Alpharad</a>, and <a href="https://www.youtube.com/watch?v=HZ5DTPfKuiY">ChilledChaos</a>)</em> have featured the mod in their content, sometimes commissioning artists to design exclusive maps for the platform.</p>`,

        websiteURL: "https://editor.levelimposter.net",
        websiteName: "Open Web App",
        githubURL: "https://github.com/DigiWorm0/LevelImposter",
        githubName: "View Source",
        youtubeURL: "https://www.youtube.com/watch?v=9W2vC3JKKrU",
        youtubeName: "Gameplay Demo",
        imageURL: "levelimposter_0.png",
        thumbnailImageURL: "levelimposter_thumb.png"
    },
    {
        id: "stoutbread",
        tags: ["Tool", "Fun"],
        tools: ["React", "TypeScript"],
        name: "StoutBread",
        shortDescription: "Online bread marketplace",
        fullDescription: `
            <p>StoutBread is a small business that sells specialty bread to UW-Stout faculty, staff, students, and parents. We help manage their React website at <a href=\"https://stoutbread.com/\">StoutBread.com</a>. This is primarily used as a menu for customers to view different flavors of bread, browse through various bread merch, view latest instagram posts, and purchase bread using the instagram bot.</p>`,

        websiteURL: "https://stoutbread.com/",
        websiteName: "Open Web App",
        githubURL: "https://github.com/DigiWorm0/StoutBread",
        githubName: "View Source",
        youtubeURL: "https://www.youtube.com/watch?v=_7srZkuT0lw",
        youtubeName: "About StoutBread",
        imageURL: "stoutbread_0.jpg",
        thumbnailImageURL: "stoutbread_thumb.jpg"
    },
    {
        id: "blitzscouter",
        tags: ["Robotics", "FRC"],
        tools: ["React Native", "TypeScript"],
        name: "BlitzScouter",
        shortDescription: "Mobile data analysis & strategy app",
        fullDescription: `
            <p>BlitzScouter is an app made with React Native that allows students at FIRST Robotics Competitions to record data and pictures about team and robot performance using customizable forms. In order to avoid using wireless 2.4GHz within the event venue, data can be shared using QR Codes, NFC, or a physical printer. Once collected by a designated user, information can be used to make informed decisions on match stretegy and alliance selection.</p>
            <p>If cellular data is available, the app can also sync with <a href="https://www.thebluealliance.com/">The Blue Alliance</a> to provide live event data including match scores and team rankings.</p>`,

        websiteURL: "https://nb-blitz.github.io/",
        websiteName: "About Us",
        githubURL: "https://github.com/NB-Blitz/BlitzScouter",
        githubName: "View Source",
        imageURL: "blitzscouter_0.png",
        thumbnailImageURL: "blitzscouter_thumb.png"
    },
    {
        id: "tdxwizard",
        tags: ["Tool", "TeamDynamix"],
        tools: ["TypeScript"],
        name: "TDXWizard",
        shortDescription: "Automation tools for IT",
        fullDescription: `
            <p>While I worked in IT at UW-Stout, we used a ticketing software called <a href="https://www.teamdynamix.com/">TeamDynamix</a>. Unfortunately, this software has a lot of weird quirks that make it awkward to use as a ticketing platform since it was actually designed as a project management solution.</p>
            <p>As a result, I developed a UserScript called TDXWizard to add automation tools, significant UI improvements, and suggested actions based on common IT tickets. In addition, it provides customizability for any technicians to adjust their own instance.</p>`,

        githubURL: "https://github.com/DigiWorm0/TDXWizard",
        githubName: "View Source",
        imageURL: "tdxwizard_0.png",
        thumbnailImageURL: "tdxwizard_thumb.png"
    },
    {
        id: "autodevil",
        tags: ["VEX-U", "Robotics"],
        tools: ["TypeScript", "React"],
        name: "AutoDevil",
        shortDescription: "Web-based 2D path editing tool",
        fullDescription: `
            <p>AutoDevil is a React web app for designing custom paths for autonomous routines. It utilizes bezier curves to smoothly travel between waypoints while executing actions at each point. In addition, it provides an tool for editing occupancy grids when developing path planning algorithms (such as A*).</p>`,

        websiteURL: "https://auto.devilbots.org/",
        websiteName: "Open Web App",
        githubURL: "https://github.com/UWST-Robotics/AutoDevil",
        githubName: "View Source",
        imageURL: "autodevil_0.png",
        thumbnailImageURL: "autodevil_thumb.png"
    },
    {
        id: "auemotes",
        tags: ["Mod"],
        tools: ["Unity", "C#"],
        name: "AU Emotes",
        shortDescription: "Custom emote engine for Among Us",
        fullDescription: `
            <p>AU Emotes is a Unity/BepInEx&nbsp;mod for the popular game <em>Among Us</em>, that adds <b>custom emotes</b>. This was originally commissioned by <a href="https://www.wearearcade.co.uk/">Arcade Media</a> for the YouTube channel <a href="https://www.youtube.com/@MoreSidemen">More Sidemen</a>&nbsp;to add fun and chaos to Among Us content. It utilizes addressable assets to remotely deploy new emotes to users as DLC without the need to update/reinstall the mod.</p>`,

        youtubeURL: "https://youtu.be/mFa13CIo2No?feature=shared&t=196",
        youtubeName: "Gameplay Demo",
        imageURL: "auemotes_0.jpg",
        thumbnailImageURL: "auemotes_thumb.jpg"
    },
    {
        id: "gifdecoder",
        "tags": ["Mod", "Fun"],
        tools: ["Unity", "C#"],
        name: "GIF Decoder",
        shortDescription: "Deserializer for GIF87a and GIF89a",
        fullDescription: `
            <p>This is a zero-dependency <b>GIF87a</b> and <b>GIF89a</b> decoder for Unity games. I originally developed it for the LevelImposter mod; However, it is fully-adaptable for use in any Unity game/application.</p>
            <p>It was originally designed to minimize the initial loading times and memory overhead of libraries such as ImageSharp by lazily loading each frame of the GIF animation as-needed much like a web browser. After it loads each frame, the sprite is moved over to video memory so it doesn't occupy any space on the heap.</p>`,

        githubURL: "https://gist.github.com/DigiWorm0/0b29b2e3c8a4c166d1e32fc6cb931c5e",
        githubName: "View Source",
        imageURL: "gifdecoder_0.png",
        thumbnailImageURL: "gifdecoder_thumb.png"
    }
];

export default ProjectsDB;