import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import './App.css';
import Profile from './components/profile/Profile';
import Project from './components/project/Project';

function App() {
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                <div className="col-md-6 slide-up">
                    <div className="ps-5">
                        <h1>Hi, I'm <b>Austin Kugler</b></h1>
                        <h2 className="mt-5">
                            I'm a junior software developer with experience in <a href="https://nodejs.org/en/" className="text-success">Node</a>
                            , <a href="https://reactjs.org/" className="text-info">React</a>
                            , <a href="https://www.typescriptlang.org/" className="text-primary">Typescript</a>
                            , and <a href="https://dotnet.microsoft.com/en-us/apps/aspnet" className="text-danger">ASP.NET</a>.
                        </h2>
                    </div>
                </div>
                <div className="col-md-6 slide-up-delayed">
                    <Profile />
                </div>
            </div>
            <div className="fade-in">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center"><b>Projects</b></h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-4">
                        <Project
                            name="LevelImposter"
                            description="Custom map studio for the popular video game, Among Us"
                            tags={["ASP.NET", "SQL", "Typescript"]}
                            link="https://github.com/DigiWorm0/LevelImposter" />
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
                            description="A spinoff of BrantSteele's Hunger Game Simulator"
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
                            description="A portfolio website for Austin Kugler"
                            tags={["React", "Typescript"]}
                            link="https://github.com/DigiWorm0/DigiWorm0.github.io" />
                    </div>
                    <div className="col-md-4">
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
