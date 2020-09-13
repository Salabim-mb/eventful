

/*
    fields:
    - id
    - mail
    - name
    - surname
    - password
    -friend list (searched by ids);
    - token
*/

import {generateToken} from "../utils/generateToken";

const User = () => ({
    id: "",
    mail: "",
    name: "",
    surname: "",
    password: "",
    friendList: [],
    token: ""
});

export const Users = ([

]);

export const registerUser = (user) => {
    Users.push(user);
};

export const getUserById = (id) => {
    let user = Users.filter((u) => u.id === id);
    return user;
};

export const getUserByToken = (token) => {
    let user = Users.filter((u) => u.token === token);
    return user !== [] ? user : null;
};

export const loginUser = (email, password) => {
    let user = Users.filter((el) => {
        if (el.email === email && el.password === password) {
            return el;
        } else {
            return null;
        }
    });
    console.log(Users);
    console.log(user);
    if (user !== [] && user.length > 0) {
        user[0].newToken = generateToken();
        return user[0];
    }
    throw "";
};

export const logoutUser = (token) => {
    let user = getUserByToken(token);
    return user.deleteToken;
};