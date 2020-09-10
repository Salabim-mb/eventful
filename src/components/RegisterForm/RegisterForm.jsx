import React, {useContext, useState} from "react";
import Grid from "@material-ui/core/Grid";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import {Redirect} from "react-router-dom";
import CustomSnackBar from "containers/CustomSnackbar";
import {PersistentContext} from "context/PersistentContext";
import {generateToken} from "utils/generateToken";
import {Users} from "data/Users";
import {User} from "models/User";

const signUserIn = (user, data) => {
    let _user = new User(data.email, data.firstName, data.lastName, data.password);
    user.login(_user.getToken(), data);
    Users.push(_user);
};

const RegisterForm = ({theme, onSubmit}) => {
    const [state, setState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        passwordR: ""
    });
    const [correct, setCorrect] = useState(true);
    const [equal, setEqual] = useState(true);
    const [validated, setValidated] = useState(false);

    const user = useContext(PersistentContext);

    const validate = (e) => {
        e.preventDefault();
        const is_ok = onSubmit(e);
        if (is_ok) {
            if (state.password === state.passwordR) {
                try {
                    signUserIn(user, state);
                    setValidated(true);
                    console.log(Users);
                } catch(e) {
                    console.log(e);
                }
            } else {
                setEqual(false);
            }
        } else {
            setCorrect(false);
        }
    };

    const renderRedirect = () => {
        return <Redirect to="/me/profile"/>;
    };

    return (
        <form className={theme.form} onSubmit={validate}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        autoComplete="firstName"
                        name="firstName"
                        variant="outlined"
                        required
                        fullWidth
                        id="firstName"
                        label="First Name"
                        autoFocus
                        onChange={e => setState({...state, [e.target.name]: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="lastName"
                        label="Last Name"
                        name="lastName"
                        autoComplete="lastName"
                        onChange={e => setState({...state, [e.target.name]: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        type="email"
                        variant="outlined"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        onChange={e => setState({...state, [e.target.name]: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="password"
                        minLength="6"
                        onChange={e => setState({...state, [e.target.name]: e.target.value})}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="passwordR"
                        label="Repeat password"
                        type="password"
                        id="passwordR"
                        autoComplete="passwordR"
                        minLength="6"
                        onChange={e => setState({...state, [e.target.name]: e.target.value})}
                    />
                </Grid>
            </Grid>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={theme.submit}
            >
                Sign Up
            </Button>
            <Grid container justify="flex-end">
                <Grid item>
                    <Link href="/login" variant="body2">
                        Already have an account? Sign in
                    </Link>
                </Grid>
            </Grid>
            {
                !equal ? <CustomSnackBar message="The passwords must be equal"/> :
                !correct ? <CustomSnackBar message="Something went wrong. Try again" /> :
                null
            }
            {validated && correct && equal ? renderRedirect() : null}
        </form>
    )
};

export default RegisterForm;