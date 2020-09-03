import React, {useState} from 'react';
import {Redirect} from "react-router-dom";
import {CssBaseline} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import EventList from "components/EventList/EventList";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import {useStyles} from "styles/eventListStyle";

const renderRedirect = () => {
    return <Redirect to="/newevent" />;
};

const MyEvents = () => {
    const [redirect, setRedirect] = useState(false);
    const theme = useStyles();

    return (
        <Container className="main" >
            <CssBaseline />
            <EventList theme={theme} />
            <Fab color="secondary" aria-label="add-event" onClick={e => setRedirect(true)}>
                <AddIcon />
            </Fab>
            {redirect ? renderRedirect() : null}
        </Container>
    );
};

export default MyEvents;