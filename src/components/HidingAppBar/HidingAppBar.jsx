import React from "react";
import {CssBaseline, useScrollTrigger} from "@material-ui/core";
import {useLocation} from 'react-router-dom';
import Slide from "@material-ui/core/Slide";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import SaveIcon from '@material-ui/icons/Save';


const HidingAppBar = ({theme, toggleDrawer}) => {

    const trigger = useScrollTrigger({ target: window });

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
                    </Toolbar>
                </AppBar>
            </Slide>
            <Toolbar />
        </React.Fragment>
    )
};

export default HidingAppBar;