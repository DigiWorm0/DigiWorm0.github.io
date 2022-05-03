import React from 'react';
import './Project.css';

const projectTagColors: { [key: string]: string } = {
    "ASP.NET": "bg-danger",
    "C++": "bg-secondary",
    "SQL": "bg-secondary",
    "React Native": "bg-info",
    "React": "bg-info",
    "Node": "bg-success",
    "Typescript": "bg-primary"
};

function Project(props: { name: string, description: string, tags: string[], link: string }) {
    return (
        <a className="card mt-1 mb-2" href={props.link}>
            <div className="card-body">
                <h5 className="card-title">
                    {props.name}
                </h5>
                <p className="card-text">
                    {props.description}
                </p>
                <p>
                    {props.tags.map((tag, index) => {
                        const color = projectTagColors[tag];
                        return (
                            <span className={"badge rounded-pill m-1 bg-primary " + color}>{tag}</span>
                        );
                    })}
                </p>
            </div>
        </a>
    );
}

export default Project;
