import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {path_list} from "./routes";


export const menuOptions = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        path: path_list.DASHBOARD,
    }, {
        name: 'My Profile',
        icon: <PersonIcon />,
        path: path_list.PROFILE,
    }, {
        name: 'My events',
        icon: <EventAvailableIcon />,
        path: path_list.MY_EVENTS,
    }, {
        name: 'Friends',
        icon: <GroupIcon />,
        path: path_list.FRIEND_LIST,
    }, {
        name: 'Meet',
        icon: <GroupAddIcon />,
        path: path_list.MEET,
    }
];

export const userOptions = [
    {
        name: 'Settings',
        icon: <SettingsIcon />,
        path: path_list.SETTINGS,
    }, {
        name: 'Log out',
        icon: <MeetingRoomIcon />,
        onClick: null
    }
];