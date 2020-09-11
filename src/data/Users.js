

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
    return user;
};

export const loginUser = (email, password) => {
    let user = Users.filter((u) => u.email === email && u.password === password);
    if (user !== []) {
        console.log(user);
        user.newToken = "";
        return user;
    }
    return null;
};

export const logoutUser = (token) => {
    let user = getUserByToken(token);
    return user.deleteToken;
};