import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            overflow: 'hidden',
            backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        flexWrap: 'nowrap',
        minHeight: "200px",
            // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
            transform: 'translateZ(0)',
    },
    title: {
        color: theme.palette.primary.light,
    },
    titleBar: {
        background:
            'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
    },
    addPhotoButton: {
        marginBottom: theme.spacing(1)
    },
    fileInput: {
        display: "none"
    },
    acceptButton: {
        //marginTop: theme.spacing(1),
        bottom: "0",
        height: "5%",
        width: "100%"
    },
    bio: {
        marginTop: theme.spacing(1)
    },
    appBar: {
        top: 'auto',
        bottom: 0
    }
}));