import React from "react";
import clsx from "clsx";
import List from "@material-ui/core/List";
import { menuOptions, userOptions } from "constants/menuOptions";
import Divider from "@material-ui/core/Divider";
import ListItemLink from "containers/ListItemLink";


const DrawerList = ({anchor, theme, toggleDrawer, user}) => (
    <div
        className={clsx(theme.list, {
            [theme.fullList]: anchor === 'top' || anchor === 'bottom'
        })}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
    >
        <List>
            {user?.token && menuOptions.map(item => (
                <ListItemLink key={item.path} path={item.path} name={item.name} icon={item.icon} onClick={null}/>
            ))}
        </List>
        <Divider/>
        <List>
            {userOptions.filter((el) => el.login === (!!user?.token)).map(item => (
                <ListItemLink key={item.path} path={item.path} name={item.name} icon={item.icon} onClick={item.onClick || null} />
            ))}
        </List>
    </div>
);

export default DrawerList;