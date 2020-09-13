import React from "react";
import {Link as RouterLink} from "react-router-dom";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListItem from "@material-ui/core/ListItem";

const ListItemLink = ({path, name, icon, click}) => {
    const renderLink = React.useMemo(
        () => React.forwardRef(
            (itemProps, ref) =>
                <RouterLink to={path} ref={ref} {...itemProps} />
            ),
        [path]
    );

    return (
        <ListItem button component={ click === null ? renderLink : click}>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={name} />
        </ListItem>
    )
};

export default ListItemLink;