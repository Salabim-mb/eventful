import React, {useState} from "react";
import {CssBaseline, useScrollTrigger} from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Badge from "@material-ui/core/Badge";


const HidingAppBar = ({theme, toggleDrawer, showNots}) => {
    const [notificationCounter, setNotificationCounter] = useState(1);

    const trigger = useScrollTrigger({ target: window });
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar>
                    <Toolbar>
                        <IconButton edge="start" onClick={toggleDrawer(true)} className={theme.button}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6">Eventful</Typography>
                        <div className={theme.buttonBar}>
                            {
                                showNots && (
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="inherit"
                                    >
                                        <Badge color="secondary" badgeContent={notificationCounter}>
                                            <NotificationsIcon />
                                        </Badge>
                                    </IconButton>
                                )
                            }
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Profile</MenuItem>
                                <MenuItem onClick={handleClose}>My account</MenuItem>
                            </Menu>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleMenu}
                                color="inherit"
                            >
                                <ExitToAppIcon />
                            </IconButton>
                        </div>
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </React.Fragment>
    )
};

export default HidingAppBar;