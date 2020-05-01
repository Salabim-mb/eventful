import {deepOrange} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    avatar: {
        color: theme.palette.getContrastText(deepOrange[500]),
        backgroundColor: deepOrange[500],
    },
    button: {
        alignItems: 'left'
    }
}));