import React, {useContext, useEffect, useState} from "react";
import TextField from "@material-ui/core/TextField";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid'
import {KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';
import Expansion from "containers/Expansion";
import Divider from "@material-ui/core/Divider";
import ContactCard from "containers/ContactCard";
import {PersistentContext} from "context/PersistentContext";
import CircularProgress from "@material-ui/core/CircularProgress";
import SaveIcon from '@material-ui/icons/Save';
import Fab from "@material-ui/core/Fab";

const loadFriends = async (token) => {
    const url = "";
    const headers = {
        Authorization: token,
        "Content-Type": "application/json"
    };
    return tmpFriends;
    const res = await fetch(url, {method: "GET", headers});

    if (res.status === 200) {
        return await res.json();
    } else {
        throw res.status;
    }
};

const tmpFriends = [

];

const EventFormContent = ({theme}) => {
    const [currentSearch, setCurrentSearch] = useState("");
    const [friendList, setFriendList] = useState([]);
    const [loading, setLoading] = useState(false);
    const [state, setState] = useState({
        name: "",
        date: new Date(),
        time_start: new Date(),
        time_end: undefined,
        summary: "",
        description: "",
        guests: []
    });

    const user = useContext(PersistentContext);

    useEffect(() => {
        const loadFriendList = async () => {
            setLoading(true);
            try {
                const res = await loadFriends(user?.token);
                //setFriendList(res);
            } catch(e) {
                setFriendList([])
            } finally {
                setLoading(false);
            };
        };
        loadFriendList();
    }, [user]);

    const addGuest = (e) => {
        setState({...state, guests: [...state.guests, e.target.value]})
    };

    const validate = (e) => {
        e.preventDefault();
    };

    const cancelInvite = (e) => {
        let newList = [...state.guests];
        newList.filter((item) => item.id !== e.target.value.id);
        setState({...state, guests: newList});
    };

    const saveEvent = (e) => {
        // post to db

    };

    const renderSaveButton = () => (
        <div className="d-block justify-content-center">
            <Fab className={theme.fab} color="secondary" aria-label="save-event" onClick={e => saveEvent(e)}>
                <SaveIcon />
            </Fab>
        </div>
    );

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
                   <Expansion title="Add end time" className={theme.expansion}>
                       <KeyboardTimePicker
                           margin="normal"
                           id="time-picker"
                           name="time_end"
                           label="Choose end time"
                           value={state.time_end}
                           onChange={e => setState({...state, time_end: e})}
                           KeyboardButtonProps={{
                               'aria-label': 'change time'
                           }}
                       />
                   </Expansion>
               </Grid>
            </MuiPickersUtilsProvider>
            <Divider className={theme?.divider}/>
            <TextField
                id="outlined-multiline-static"
                label="Add description"
                multiline
                fullWidth
                required
                rows={4}
                value={state.description}
                onChange={e => setState({...state, description: e.target.value})}
                variant="outlined"
            />
            <div>
                {
                    loading ? <CircularProgress /> : (
                        <>
                            <div>
                                <TextField
                                    id="standard-search"
                                    label="Invite people"
                                    type="search"
                                    fullWidth
                                    value={currentSearch}
                                    onChange={e => setCurrentSearch(e.target.value)}
                                />
                            </div>
                            {
                                friendList.filter(
                                    (item) => item.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                                        item.email.toLowerCase().includes(currentSearch.toLowerCase())).map((contact) => (
                                    <ContactCard user={contact} onClick={state.guests.includes(contact) ? cancelInvite : addGuest} theme={theme} key={contact.id} selected={state.guests.includes(contact)}/>
                                ))
                            }
                        </>
                    )
                }
            </div>
            {state.name !== "" && state.description !== "" && renderSaveButton()}
        </form>
    )
};

export default EventFormContent;