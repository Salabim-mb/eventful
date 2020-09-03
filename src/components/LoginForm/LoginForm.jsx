import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import CustomSnackBar from "containers/CustomSnackbar";

const LoginForm = ({theme, onSubmit}) => {
    const [state, setState] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState(false);

    const validate = (e) => {
        e.preventDefault();
        const is_ok = onSubmit(e);
        setError(!is_ok);
    };

    return (
        <form className={theme.form} onSubmit={validate}>
            <TextField
                type="email"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={e => setState({...state, email: e.target.value})}
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={e => setState({...state, password: e.target.value})}
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={theme.submit}
            >
                Log In
            </Button>
            <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="/register" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid>
            {error ? <CustomSnackBar message="Something went wrong. Try again" /> : null }
        </form>
    );
};

export default LoginForm;