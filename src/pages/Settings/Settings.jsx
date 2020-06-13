import React, {useContext, useState} from "react";
import {SettingsContext} from "context/SettingsContext";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";

const Settings = () => {
    const [redirect, setRedirect] = useState(false);
    const settings = useContext(SettingsContext);

    const theme = {};
    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={theme.paper}>
                <SettingsContent settings={settings} theme={theme}/>
            </div>
        </Container>
    )
};

export default Settings;