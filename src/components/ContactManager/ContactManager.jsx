import React, {useContext, useEffect, useState} from 'react';
import {PersistentContext} from "context/PersistentContext";
import {ContactCard, ListItemLink, TransitionModal, ErrorAlert, LoadingAlert} from "containers";
import {useStyles} from "styles/contactStyle";
import {getUserByToken} from "data/Users";
import Typography from "@material-ui/core/Typography";

const ContactManager = ({isSelectable}) => {
    const user = useContext(PersistentContext);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const getContactList = (token) => {
            setLoading(true);
            let currentUser = getUserByToken(token);
            if (currentUser === null || currentUser == []) {
                setError(true);
            } else {
                console.log(currentUser);
                setContactList(currentUser[0].friendList);
            }
            setLoading(false);
        };
        getContactList(user?.token);
    }, [user.token]
    );

    const toggleUserSelect = () => {
        const addUser = () => {
            selected.append(user);
            return selected;
        };

        const cutUser = () => {
            const idx = selected.indexOf(user);
            if (idx > -1) selected.slice(idx, 1);
            return selected;
        };

        setSelected(selected.includes(user) ? cutUser() : addUser());
    };

    const theme = useStyles();

    return (
        loading ? <LoadingAlert /> :
        error ? <ErrorAlert /> : (
            contactList.length === 0 ? (
                <Typography variant="h5" component="h5" gutterBottom>
                    No friends yet :(
                </Typography>
            ) : (
            <TransitionModal>
                <ListItemLink>
                    {console.log(contactList)}
                </ListItemLink>
                {
                    contactList.map( (item) => (
                        <ContactCard key={item} user={item} theme={theme} selected={selected.includes(item)} onClick={isSelectable ? toggleUserSelect : null}/>
                    ))
                }
            </TransitionModal>
                ))
    )
};

export default ContactManager;