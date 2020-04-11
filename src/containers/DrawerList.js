import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";

import { menuOptions, userOptions } from "constants/menuOptions";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const DrawerList = ({anchor, theme, toggleDrawer}) => (
    <div
        className={clsx(theme.list, {
            [theme.fullList]: anchor === 'top' || anchor === 'bottom'
        })}
        role="presentation"
        onClick={toggleDrawer( false)}
        onKeyDown={toggleDrawer( false)}
    >
        <List>
            {menuOptions.map(item => (
                <ListItem button key={item.name} onClick={item.onClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
        <Divider />
        <List>
            {userOptions.map(item => (
                <ListItem button key={item.name} onClick={item.onClick}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.name} />
                </ListItem>
            ))}
        </List>
    </div>
);

export default DrawerList;