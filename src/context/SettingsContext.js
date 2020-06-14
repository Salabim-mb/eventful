import Cookies from 'universal-cookie';
import React, {useState} from "react";

const cookies = new Cookies();

export const SettingsContext = React.createContext({
   settings: {},
    changeSettings: () => {},
    setSettings: () => {},
    clearSettings: () => {}
});

export const SettingsProvider = props => {
    const [settings, setSettings] = useState(cookies.get('settings') || {
        meet: false,
        nots: false,
        dark: false
    });
    const user = {
        meet: settings.meet,
        nots: settings.nots,
        dark: settings.dark,
        changeSettings: (data) => {
            cookies.set("settings", {...settings, ...data}, {
                path: "/",
                secure: process.env.REACT_APP_SECURE_COOKIES === 'on'
            });
            setSettings(data);
        },
        setSettings: () => {
            cookies.set("settings", {
                meet: false,
                dark: false,
                nots: false
            })
        }
    };

    return <SettingsContext.Provider value={user} {...props} />;
};