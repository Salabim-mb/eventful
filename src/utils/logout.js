import {logoutUser} from "../data/Users";

export const logout = (user) => {
    if (user?.token) {
        logoutUser(user.token);
        user.logout();
        return true;
    }
    return false;
};