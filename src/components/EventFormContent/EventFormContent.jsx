import React, {useState} from "react";
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid'
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

const EventFormContent = ({theme}) => {

    const [state, setState] = useState({
        name: "",
        date: new Date(),
        time_start: new Date(),
        summary: "",
        description: "",
        guests: []
    });

    const validate = (e) => {
        e.preventDefault();
    };

    return (
        <form className={theme?.form} onSubmit={validate}>
            <TextField
                type="text"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Event name"
                name="name"
                autoFocus
                value={state.name}
                onChange={e => setState({...state, name: e.target.value})}
            />
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
               <Grid container justify="space-around">
                   <KeyboardDatePicker
                       margin="normal"
                       id="date-picker-dialog"
                       name="date"
                       label="Choose date"
                       format="dd.MM.yyyy"
                       value={state.date}
                       onChange={e => setState({...state, date: e})}
                       KeyboardButtonProps={{
                           'aria-label': 'change date'
                       }}
                   />
                   <KeyboardTimePicker
                       margin="normal"
                       id="time-picker"
                       name="time_start"
                       label="Choose start time"
                       value={state.time_start}
                       onChange={e => setState({...state, time_start: e})}
                       KeyboardButtonProps={{
                           'aria-label': 'change time'
                       }}
                   />
               </Grid>
            </MuiPickersUtilsProvider>
        </form>
    )
};

export default EventFormContent;