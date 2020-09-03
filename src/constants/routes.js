import {
    SignUp,
    SignIn,
    Settings,
    MyEvents,
    EventForm
} from 'pages';

const path_list = {
    DASHBOARD: "/",
    REGISTER: "/register",
    LOGIN: "/login",
    PROFILE: "/me/profile",
    MY_EVENTS: "/me/events",
    NEW_EVENT: "/newevent",
    SETTINGS: "/me/settings",
    MEET: "/meet",
    MEET_CONFIG: "/meet/setprofile",
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
    }
];