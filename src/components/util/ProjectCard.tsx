import React from 'react';
import TagList from "../../models/TagList";
import { Badge } from "react-bootstrap";

export interface ProjectProps {
    name: string;
    description: string;
    url: string;
    tags?: string[];
}

function ProjectCard(props: ProjectProps) {
    const [isHovered, setIsHovered] = React.useState(false);

    return (
        <a
            href={props.url}
            style={{
                borderRadius: 10,
                backgroundColor: isHovered ? "rgba(30, 30, 30, 1)" : "rgba(25, 25, 25, 0.8)",
                transform: isHovered ? "scale(1.02)" : "scale(1)",
                transition: "all 0.3s ease-in-out",
                padding: 30,
                margin: 0,
                maxWidth: 400,
                textAlign: "center",
                color: "white"
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <h4>
                <b>{props.name}</b>
            </h4>
            <p style={{ fontSize: 14 }}>
                {props.description}
            </p>
            <div>
                {props.tags?.map((tagName, index) => {
                    const tagInfo = TagList.find((t) => t.name === tagName);
                    return (
                        <Badge
                            key={index}
                            pill
                            bg={""}
                            style={{
                                backgroundColor: tagInfo?.bgColor ?? "grey",
                                color: tagInfo?.textColor ?? "white",
                                margin: 5,
                            }}
                        >
                            {tagName}
                        </Badge>
                    )
                })}
            </div>
        </a>
    );
}

export default ProjectCard;
