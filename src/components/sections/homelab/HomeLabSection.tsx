import TypingTextAnimation from "../../common/TypingTextAnimation.tsx";
import FadeDelay from "../../common/FadeDelay.tsx";
import HomeLabCard from "./HomeLabCard.tsx";
import {Box, Divider} from "@mui/material";
import HomeLab from "../../../types/HomeLab.ts";

export interface HomeLabSectionProps {
    homeLabs: HomeLab[];
}

export default function HomeLabSection(props: HomeLabSectionProps) {
    return (
        <Box>
            <h2>
                <TypingTextAnimation
                    interval={50}
                    delay={2000}
                    text={"I run home labs"}
                />
            </h2>

            {props.homeLabs.map((homeLab, index) => (
                <FadeDelay
                    delay={2000 + index * 100}
                    key={homeLab.title}
                >
                    {index > 0 && <Divider/>}

                    <HomeLabCard
                        title={homeLab.title}
                        description={homeLab.description}
                        imageURL={homeLab.imageURL}
                    />
                </FadeDelay>
            ))}
        </Box>
    )
}