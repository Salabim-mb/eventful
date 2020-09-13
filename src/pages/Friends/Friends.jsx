import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import ContactManager from "components/ContactManager/ContactManager";
import {useStyles} from "styles/friendsStyle";

const Friends = () => {
    const theme = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={theme?.paper}>
                <ContactManager isSelectable={false}/>
            </div>
        </Container>
    )
};

export default Friends;