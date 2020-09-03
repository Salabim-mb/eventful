import React from "react";
import {Link as RouterLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const ListItemLink = ({path, name, icon, onClick}) => {
    const renderLink = React.useMemo(
        () => React.forwardRef(
            (itemProps, ref) =>
                <RouterLink to={path} ref={ref} {...itemProps} />
            ),
        [path]
    );

    return (
        <ListItem button component={ onClick === null ? renderLink : onClick}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
};

export default ListItemLink;