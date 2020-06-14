import React from "react";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import SettingsContent from "components/SettingsContent";

const Settings = (props) => {
    const theme = {};
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={theme.paper}>
                <SettingsContent setDarkMode={props.setDarkMode} theme={theme}/>
            </div>
        </Container>
    )
};

export default Settings;