import {
    SignUp,
    SignIn,
    BioForm
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
    }
];

export { path_list };