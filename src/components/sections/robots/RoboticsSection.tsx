import RoboticsCard from "./RoboticsCard.tsx";
import {Box, Divider} from "@mui/material";
import FadeDelay from "../../common/FadeDelay.tsx";
import TypingTextAnimation from "../../common/TypingTextAnimation.tsx";
import Robot from "../../../types/Robot.ts";

export interface RoboticsSectionProps {
    robots: Robot[];
}

export default function RoboticsSection(props: RoboticsSectionProps) {
    return (
        <Box>
            <h2>
                <TypingTextAnimation
                    interval={50}
                    duration={110}
                    delay={2000}
                    text={"I build robots"}
                />
            </h2>

            {props.robots.map((robot, index) => (
                <FadeDelay
                    delay={2000 + index * 100}
                    key={robot.title}
                >
                    {index > 0 && <Divider/>}

                    <RoboticsCard
                        title={robot.title}
                        teamName={robot.teamName}
                        timespan={robot.timespan}
                        imageURL={robot.imageURL}
                        teamHref={robot.teamHref}
                        githubHref={robot.githubHref}
                    />
                </FadeDelay>
            ))}
        </Box>
    )
}