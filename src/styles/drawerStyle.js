import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    },
    button: {
        alignItems: 'left'
    },
    saveButton: {
        alignItems: 'right'
    },
    buttonBar: {
        right: theme.spacing(1)
    }
}));