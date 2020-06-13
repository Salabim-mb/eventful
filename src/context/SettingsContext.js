import Cookies from 'universal-cookie';
import React, {useState} from "react";

const cookies = new Cookies();

export const SettingsContext = React.createContext({
   settings: {},
    changeSettings: () => {}
});

export const SettingsProvider = props => {
    const [settings, setSettings] = useState(cookies.get('settings'));
    const user = {
        settings,
        changeSettings: (data) => {
            cookies.set("settings", {...settings, ...data}, {
                path: "/",
                secure: process.env.REACT_APP_SECURE_COOKIES === 'on'
            });
            setSettings(data);
        },
    };

    return <SettingsContext.Provider value={user} {...props} />;
};