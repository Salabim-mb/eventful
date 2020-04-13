import React, {useState} from 'react';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import CardActions from "@material-ui/core/CardActions";
import EventIcon from '@material-ui/icons/Event';
import IconButton from "@material-ui/core/IconButton";
import CardHeader from "@material-ui/core/CardHeader";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from "@material-ui/core/Button";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from "clsx";
import Collapse from "@material-ui/core/Collapse";

const EventCard = ({theme, data, isAccepted}) => {
    const [expanded, setExpanded] = useState(false);

    const {name, date, time, summary, description} = data;
    return (
        <Card className={theme.card}>
            <CardHeader
                avatar={<EventIcon />}
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                    }
                title={date}
                subheader={time}
            />
            <CardContent className={theme.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">
                    {name}
                </Typography>
                <Typography>
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                {!isAccepted ?
                    <ButtonGroup variant="text" fullWidth={true} color="secondary" aria-label="text secondary button group">
                        <Button>✗ Decline</Button>
                        <Button>✓ Accept</Button>
                    </ButtonGroup> :
                    null
                }
                <IconButton
                    className={clsx(theme.expand, {
                        [theme.expandOpen]: expanded
                    })}
                    onClick={setExpanded(!expanded)}
                    aria-expanded={expanded}
                    aria-label="show-more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    {description}
                </CardContent>
            </Collapse>
        </Card>
    );
};

export default EventCard;