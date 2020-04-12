import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {useStyles} from "styles/authStyle";
import IconBar from "containers/IconBar";
import {loginFacebook} from "utils/oauth/facebook";
import {loginInstagram} from "utils/oauth/instagram";
import {loginReddit} from "utils/oauth/reddit";
import LoginForm from "components/LoginForm/LoginForm";
import {validateForm} from "utils/validateForm";



const SignIn = () => {
    const theme = useStyles();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={theme.paper}>
                <Avatar className={theme.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">Log in</Typography>
                <IconBar fauth={loginFacebook} iauth={loginInstagram} rauth={loginReddit} />
                <LoginForm theme={theme} onSubmit={validateForm} />
            </div>
        </Container>
    );
};

export default SignIn;