import React, {useContext, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import {SettingsContext} from "context/SettingsContext";
import {Redirect} from "react-router-dom";
import {path_list} from "constants/routes";

const SettingsContent = ({theme, setDarkMode}) => {
    const settings = useContext(SettingsContext);
    const [redirect, setRedirect] = useState(false);
    const [meet, setMeet] = useState(settings?.meet || false);
    const [dark, setDark] = useState(settings?.dark || false);
    const [nots, setNots] = useState(settings?.nots || false);

    return (
        <List className={theme.list}>
            <ListItem className={theme.listItem}>
                <ListItemText primary="Enable meet" />
                <Switch
                    checked={meet}
                    onChange={() => {
                        meet ? settings.changeSettings({...settings, meet: false}) : setRedirect(true);
                    }}
                    name="meet"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </ListItem>
            <Divider />
            <ListItem className={theme.listItem}>
                <ListItemText primary="Toggle notifications" />
                <Switch
                    checked={nots}
                    onChange={() => {
                        setNots(!nots);
                        settings.changeSettings({...settings, nots: nots});
                    }}
                    name="nots"
                    inputProps={{'aria-label': 'secondary checkbox'}}
                />
            </ListItem>
            <Divider />
            <ListItem className={theme.listItem}>
                <ListItemText primary="Dark mode" />
                    <Switch
                        checked={dark}
                        onChange={() => {
                            setDark(!dark);
                            settings.changeSettings({...settings, dark: dark});
                            setDarkMode(dark);
                        }}
                        name="dark"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
            </ListItem>
            <Divider />
            <ListItem button className={theme.listItem}> {/*fetch*/}
                <ListItemText primary="Reset bio" />
            </ListItem>
            {redirect && <Redirect to={path_list.MEET_CONFIG}/>}
        </List>
    )
};

export default SettingsContent;