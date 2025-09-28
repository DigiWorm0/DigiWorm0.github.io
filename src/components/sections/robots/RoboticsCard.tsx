import {Grid, IconButton} from "@mui/material";
import {CalendarToday, GitHub, Language, Person} from "@mui/icons-material";

export interface RoboticsCardProps {
    title: string;
    teamName: string;
    timespan: string;
    imageURL: string;
    teamHref: string;
    githubHref: string;
}

export default function RoboticsCard(props: RoboticsCardProps) {
    return (
        <Grid
            container
            spacing={3}
            style={{margin: 10}}
        >
            <Grid
                size={3}
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <img
                    src={`/robotics/${props.imageURL}`}
                    alt={props.title}
                    style={{
                        maxWidth: '100%',
                        maxHeight: 150,
                        width: 'auto',
                        height: 'auto'
                    }}
                />
            </Grid>
            <Grid size={9}>
                <h2 style={{marginBottom: 2}}>
                    {props.title}
                </h2>
                <h4 style={{color: 'gray', margin: 2}}>
                    <Person
                        style={{fontSize: 16, verticalAlign: 'middle', marginRight: 4}}
                    />
                    {props.teamName}
                </h4>
                <h4 style={{color: 'gray', margin: 2}}>
                    <CalendarToday
                        style={{fontSize: 16, verticalAlign: 'middle', marginRight: 4}}
                    />
                    {props.timespan}
                </h4>
                <Grid>
                    <IconButton
                        href={props.teamHref}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        style={{marginTop: 5}}
                        size={"small"}
                        color={"primary"}
                    >
                        <Language/>
                    </IconButton>
                    <IconButton
                        href={props.githubHref}
                        target={"_blank"}
                        rel={"noopener noreferrer"}
                        style={{marginTop: 5}}
                        size={"small"}
                        color={"primary"}
                    >
                        <GitHub/>
                    </IconButton>
                </Grid>
            </Grid>
        </Grid>
    )
}