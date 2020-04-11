import React, {useState} from "react";
import {useStyles} from "styles/drawerStyle";
import {SwipeableDrawer} from "@material-ui/core";
import DrawerList from "containers/DrawerList";
import MenuIcon from '@material-ui/icons/Menu';
import HidingAppBar from "components/HidingAppBar/HidingAppBar";
import IconButton from "@material-ui/core/IconButton";

const MenuBar = () => {
    const theme = useStyles();
    const [left, setLeft] = useState(false);

    const toggleDrawer = (left) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setLeft(left);
    };

    return (
        <React.Fragment>

            <HidingAppBar position="absolute" theme={theme} toggleDrawer={toggleDrawer}/>
            <SwipeableDrawer
                anchor="left"
                open={left}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer( true)}
            >
                <DrawerList anchor="left" theme={theme} toggleDrawer={toggleDrawer} />
            </SwipeableDrawer>
        </React.Fragment>
    );
};

export default MenuBar;