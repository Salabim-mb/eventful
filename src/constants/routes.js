import {
    SignUp,
    SignIn,
    MyEvents,
    EventForm
} from 'pages';
import {path_list} from "./path_list";

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
        path: path_list.MY_EVENTS,
        component: MyEvents,
        exact: true
    }, {
        path: path_list.NEW_EVENT,
        component: EventForm,
        exact: true
    }
];