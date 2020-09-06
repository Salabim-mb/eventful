import React, {useContext, useState} from "react";
import {useStyles} from "styles/drawerStyle";
import {SwipeableDrawer} from "@material-ui/core";
import DrawerList from "containers/DrawerList";
import HidingAppBar from "components/HidingAppBar/HidingAppBar";
import {SettingsContext} from "context/SettingsContext";


const MenuBar = () => {
    const theme = useStyles();
    const [left, setLeft] = useState(false);
    const settingsContext = useContext(SettingsContext);

    const toggleDrawer = (left) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setLeft(left);
    };

    return (
        <React.Fragment>

            <HidingAppBar position="absolute" theme={theme} toggleDrawer={toggleDrawer} showNots={!settingsContext.nots}/>
            <SwipeableDrawer
                anchor="left"
                open={left}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer( true)}
            >
                <DrawerList anchor="left" theme={theme} toggleDrawer={toggleDrawer}/>
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default MenuBar;