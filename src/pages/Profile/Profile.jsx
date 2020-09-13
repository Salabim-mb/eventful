import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Typography from "@material-ui/core/Typography";
import React, {useContext} from "react";
import {PersistentContext} from "../../context/PersistentContext";
import {useStyles} from "../../styles/profileStyle";
import EmailIcon from '@material-ui/icons/Email';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import Divider from "@material-ui/core/Divider";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";
import ListItem from "@material-ui/core/ListItem";
import {SettingsContext} from "../../context/SettingsContext";
import ListItemIcon from "@material-ui/core/ListItemIcon";

const Profile = () => {
    const theme = useStyles();
    const user = useContext(PersistentContext);
    const settings = useContext(SettingsContext);

    return (
        <Container component="main" maxWidth="xs">
            {console.log(user)}
            <CssBaseline />
            <div className={theme.paper}>
                <Avatar className={theme.avatar}>
                    <AccountCircleIcon />
                </Avatar>
                <Typography component="h1" variant="h5" className={theme.credentials}>{`${user.data.firstName} ${user.data.lastName}`}</Typography>
                <ListItem className={theme.listItem}>
                    <ListItemIcon>
                        <EmailIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Email address" />
                    <Typography variant="overline" gutterBottom>
                        {user.data.email}
                    </Typography>

                </ListItem>
                <Divider />
                <ListItem className={theme.listItem}>
                    <ListItemIcon>
                        <EmojiPeopleIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Meet enabled" />
                    <Switch
                        checked={settings.meet}
                        disabled
                        name="meet"
                        inputProps={{'aria-label': 'secondary checkbox'}}
                    />
                </ListItem>
            </div>
        </Container>
    );
};

export default Profile;