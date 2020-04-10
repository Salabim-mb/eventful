import {
    SignUp,
    SignIn
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
    }
];

export { path_list };