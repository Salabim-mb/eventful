import {
    SignUp,
    SignIn,
    BioForm,
    Settings,
    MyEvents,
    EventForm,
    Profile,
    Friends
} from 'pages';

export const path_list = {
    DASHBOARD: "/",
    REGISTER: "/register",
    LOGIN: "/login",
    PROFILE: "/me/profile",
    MY_EVENTS: "/me/events",
    NEW_EVENT: "/newevent",
    SETTINGS: "/me/settings",
    MEET: "/meet",
    MEET_SETUP: "/me/setupmeet",
    FRIEND_LIST: "/me/friends"
};

export default [
    {
        path: path_list.REGISTER,
        component: SignUp,
        exact: true
    }, {
        path: path_list.LOGIN,
        component: SignIn,
        exact: true
    }, {
        path: path_list.MEET_SETUP,
        component: BioForm,
        exact: true
    }, {
        path: path_list.SETTINGS,
        component: Settings,
        exact: true
    }, {
        path: path_list.MY_EVENTS,
        component: MyEvents,
        exact: true
    }, {
        path: path_list.NEW_EVENT,
        component: EventForm,
    }, {
        path: path_list.PROFILE,
        component: Profile,
        exact: true
    }, {
        path: path_list.FRIEND_LIST,
        component: Friends,
        exact: true
    }
];