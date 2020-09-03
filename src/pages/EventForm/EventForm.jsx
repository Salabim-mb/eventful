import React from "react";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import EventFormContent from "components/EventFormContent/EventFormContent";
import {useStyles} from "styles/eventFormStyle";

const EventForm = () => {
    const theme = useStyles;

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <EventFormContent theme={theme} />
        </Container>
    )
};

export default EventForm;