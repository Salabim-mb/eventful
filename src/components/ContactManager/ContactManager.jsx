import React, {useContext, useEffect, useState} from 'react';
import {PersistentContext} from "context/PersistentContext";
import TransitionsModal from "../../containers/TransitionModal";
import ContactCard from "../../containers/ContactCard";
import {useStyles} from "../../styles/contactStyle";

const ContactManager = () => {
    const user = useContext(PersistentContext);
    const [contactList, setContactList] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const selected = [];

    useEffect(() => {
        const getContactList = (token) => {

        };
        getContactList(user.token);
    }, [user.token]
    );

    const theme = useStyles();
    return (
        <TransitionsModal>
            {contactList.map( (item, idx) => (
                <ContactCard user={item} theme={theme}/>
            ))}
        </TransitionsModal>
    )
};