export const generateToken = () => {
    let uuid = require("uuid");

    return uuid.v4();
};