import React, {useState} from "react";
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const PersistentContext = React.createContext({
    token: undefined,
    login: () => {},
    logout: () => {}
});

export const PersistentProvider = props => {
    const [token, setToken] = useState(cookies.get('token'));

    const user = {
        token,
        login: (newToken) => {
            cookies.set('token', newToken, { path: "/" });
            setToken(newToken);
        },
        logout: () => {
            cookies.remove('token', {path: '/'});
            setToken(undefined);
        }
    };

    return <PersistentContext.Provider value={user} {...props}/>
};