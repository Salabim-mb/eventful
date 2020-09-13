import React, {useContext, useState} from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import Divider from "@material-ui/core/Divider";
import {SettingsContext} from "context/SettingsContext";
import {Redirect} from "react-router-dom";
import {path_list} from "constants/routes";
import {PersistentContext} from "../../context/PersistentContext";
import {removeBio} from "../../data/Bios";

const SettingsContent = ({theme, setDarkMode}) => {
    const settings = useContext(SettingsContext);
    const [redirect, setRedirect] = useState(false);
    const [meet, setMeet] = useState(settings?.meet || false);
    const [dark, setDark] = useState(settings?.dark);
    const [nots, setNots] = useState(settings?.nots || false);

    const user = useContext(PersistentContext);

    return (
        <List className={theme.list}>
            <ListItem className={theme.listItem} onClick={
                meet ? null : () => setRedirect(true)
            }>
                <ListItemText primary="Enable meet" />
                <Switch
                    disabled
                    checked={meet}
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
            <ListItem button className={theme.listItem} onClick={() => {
                removeBio(user.id);
                settings.changeSettings({meet: false});
                setMeet(false);
            }}>
                <ListItemText primary="Reset bio" />
            </ListItem>
            {redirect && <Redirect to={path_list.MEET_SETUP}/>}
        </List>
    )
};

export default SettingsContent;