import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Project from './components/project/Project';

function App() {
    return (
        <div className="container">
            <div className="row align-items-center mt-lg-5 mt-md-4">
                <div className="col-lg-4 col-md-6 offset-lg-1 slide-up">
                    <Profile />
                </div>
                <div className="col-md-6 slide-up-delayed">
                    <div className="ps-5 mt-3 mb-5 pe-5">
                        <h1>Hi, I'm <b>Digi</b></h1>
                        <h2 className="mt-5">
                            I'm a junior software developer with experience in <a href="https://nodejs.org/en/" className="text-success">Node</a>
                            , <a href="https://reactjs.org/" className="text-info">React</a>
                            , <a href="https://www.typescriptlang.org/" className="text-primary">Typescript</a>
                            , and <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" className="text-danger">ASP.NET</a>.
                        </h2>
                    </div>
                </div>
            </div>
            <div className="fade-in">
                <div className="row mt-4">
                    <div className="col-md-12">
                        <h1 className="text-center mb-4"><b>My Projects</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Project
                            name="LevelImposter"
                            description="Custom map studio for the video game Among Us"
                            tags={["ASP.NET", "SQL", "Typescript"]}
                            link="https://levelimposter.net/" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="BlitzScouter Legacy"
                            description="Website to collect and store data about FRC robots"
                            tags={["ASP.NET", "SQL"]}
                            link="https://github.com/NB-Blitz/BlitzScouter-Old" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="BlitzScouter v2"
                            description="App to collect and store data about FRC robots"
                            tags={["React Native", "Typescript"]}
                            link="https://github.com/NB-Blitz/BlitzScouter" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Project
                            name="BlitzLib"
                            description="Library to help program FRC robots"
                            tags={["C++"]}
                            link="https://github.com/NB-Blitz/BlitzLibrary-CPP" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="Where Is Your Left Elbow?"
                            description="A comedic AI that tells you where your left elbow is"
                            tags={["React", "Typescript"]}
                            link="https://github.com/DigiWorm0/whereisyourleftelbow" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="AP Hunger Games"
                            description="A spinoff of BrantSteele's Hunger Game Simulator"
                            tags={["React", "Typescript"]}
                            link="https://github.com/DigiWorm0/APHG" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Project
                            name="FlappyBot"
                            description="NEAT AI experiment for the game Flappy Bird"
                            tags={["Node"]}
                            link="https://github.com/DigiWorm0/FlappyBot" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="Mario Tank"
                            description="A spinoff of Super Mario Bros for the NES"
                            tags={["Node"]}
                            link="https://github.com/DigiWorm0/MarioTank" />
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="Lemon Quotes"
                            description="A discord bot to record and share personal quotes"
                            tags={["Node", "Typescript"]}
                            link="https://github.com/DigiWorm0/LemonQuotes" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <Project
                            name="This Website"
                            description="A portfolio website for myself :)"
                            tags={["React", "Typescript"]}
                            link="https://github.com/DigiWorm0/DigiWorm0.github.io" />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
                <div className="row mb-2 mt-1">
                    <div className="col-sm-12 text-center pe-3">
                        <a className="btn text-light" href="https://github.com/DigiWorm0">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                        </a>
                        <a className="btn text-light" href="mailto:digiworm0@gmail.com">
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
