import React from "react";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import EventFormContent from "components/EventFormContent/EventFormContent";

const EventForm = () => {
    const theme = null;

    return (
        <Container component="main" maxWidth="sm">
            <CssBaseline />
            <EventFormContent theme={theme} />
        </Container>
    )
};

export default EventForm;