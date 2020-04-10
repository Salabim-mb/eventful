import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import IconBar from "../../containers/IconBar";
import {registerFacebook} from "../../utils/oauth/facebook";
import {registerInstagram} from "../../utils/oauth/instagram";
import {registerReddit} from "../../utils/oauth/reddit";

const useStyles = makeStyles( theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main
    },
    form: {
        width: '100%',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2)
    }
}));

const SignUp = () => {
    const theme = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={theme.paper}>
                <Avatar className={theme.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Create new account</Typography>
                <IconBar className={theme.form} fauth={registerFacebook} iauth={registerInstagram} rauth={registerReddit} />
                <RegisterForm theme={theme} />
            </div>
        </Container>
    )
};

export default SignUp;