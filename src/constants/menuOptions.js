import React from "react";
import PersonIcon from '@material-ui/icons/Person';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';
import GroupIcon from '@material-ui/icons/Group';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import DashboardIcon from '@material-ui/icons/Dashboard';
import SettingsIcon from '@material-ui/icons/Settings';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';


export const menuOptions = [
    {
        name: 'Dashboard',
        icon: <DashboardIcon />,
        onClick: () => {}
    }, {
        name: 'My Profile',
        icon: <PersonIcon />,
        onClick: () => {}
    }, {
        name: 'My events',
        icon: <EventAvailableIcon />,
        onClick: () => {}
    }, {
        name: 'Friends',
        icon: <GroupIcon />,
        onClick: () => {}
    }, {
        name: 'Meet',
        icon: <GroupAddIcon />,
        onClick: () => {}
    }
];

export const userOptions = [
    {
        name: 'Settings',
        icon: <SettingsIcon />,
        onClick: () => {}
    }, {
        name: 'Log out',
        icon: <MeetingRoomIcon />,
        onClick: () => {}
    }
];