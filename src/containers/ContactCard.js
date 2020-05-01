import React from 'react';
import ListItem from "@material-ui/core/ListItem";
import Avatar from "@material-ui/core/Avatar";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from '@material-ui/icons/Check';

const ContactCard = (selected, onClick, user, theme, message) => (
    <ListItem button key={user} className={theme.button} onClick={onClick}>
        <ListItemIcon>
            {selected ?
                <Avatar className={theme.selected}><CheckIcon/></Avatar> :
                <Avatar className={theme.avatar}>{user.name.charAt(0)}</Avatar>
            }
        </ListItemIcon>
        {message ? <ListItemText primary={message} secondary={message}/> : <ListItemText primary={message}/>}
    </ListItem>
);

export default ContactCard;