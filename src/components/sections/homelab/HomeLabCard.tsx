import {Grid} from "@mui/material";
import {Interweave} from "interweave";

export interface HomeLabCardProps {
    title: string;
    description: string;
    imageURL: string;
}

export default function HomeLabCard(props: HomeLabCardProps) {
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
                    src={`/labs/${props.imageURL}`}
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
                <h4 style={{color: 'gray', margin: 2, marginTop: 5}}>
                    <Interweave content={props.description}/>
                </h4>
            </Grid>
        </Grid>
    )
}