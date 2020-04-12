import React from "react";
import Container from "@material-ui/core/Container";
import {CssBaseline} from "@material-ui/core";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import RegisterForm from "components/RegisterForm/RegisterForm";
import IconBar from "containers/IconBar";
import {registerFacebook} from "utils/oauth/facebook";
import {registerInstagram} from "utils/oauth/instagram";
import {registerReddit} from "utils/oauth/reddit";
import {useStyles} from "styles/authStyle";
import {validateForm} from "../../utils/validateForm";


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
                <RegisterForm theme={theme} onSubmit={validateForm}/>
            </div>
        </Container>
    )
};

export default SignUp;