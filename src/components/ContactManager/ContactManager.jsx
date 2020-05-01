import React, {useContext, useEffect, useState} from 'react';
import {PersistentContext} from "context/PersistentContext";
import {ContactCard, ListItemLink, TransitionModal, ErrorAlert, LoadingAlert} from "containers";
import {useStyles} from "styles/contactStyle";




const ContactManager = () => {
    const user = useContext(PersistentContext);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [selected, setSelected] = useState([]);

    useEffect(() => {
        const getContactList = (token) => {
            setLoading(true);

            setLoading(false);
        };
        getContactList(user.token);
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
        error ? <ErrorAlert /> :
        <TransitionModal>
            <ListItemLink>

            </ListItemLink>
            {contactList.map( (item) => (
                <ContactCard key={item} user={item} theme={theme} selected={selected.includes(item)} onClick={toggleUserSelect}/>
            ))}
        </TransitionModal>
    )
};