import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import { menuOptions, userOptions } from "constants/menuOptions";
import Divider from "@material-ui/core/Divider";
import {BrowserRouter as Router} from "react-router-dom";
import ListItemLink from "containers/ListItemLink";


const DrawerList = ({anchor, theme, toggleDrawer}) => (
    <div
        className={clsx(theme.list, {
            [theme.fullList]: anchor === 'top' || anchor === 'bottom'
        })}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <Router>
            <List>
                {menuOptions.map(item => (
                    <ListItemLink path={item.path} name={item.name} icon={item.icon} onClick={null}/>
                ))}
            </List>
            <Divider/>
            <List>
                {userOptions.map(item => (
                    <ListItemLink path={item.path} name={item.name} icon={item.icon} onClick={item.onClick} />
                ))}
            </List>
        </Router>
    </div>
);

export default DrawerList;