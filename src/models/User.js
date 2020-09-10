import {generateToken} from "../utils/generateToken";

export class User {
    constructor(mail, name, surname, password) {
        this.id = generateToken(); //PUBLIC KEY
        this.mail = mail;
        this.name = name;
        this.surname = surname;
        this.password = password;
        this.friendList = [];
        this.token = generateToken();
    }

    get getId() {
        return this.id;
    }

    get getToken() {
        return this.token();
    }

    set deleteToken(token) {
        this.token = token;
    }

    get data() {
        return {
            mail: this.mail,
            name: this.name,
            surname: this.surname,
            password: this.password
        }
    }

    getFriend(id) {
        return this.friendList.filter((el) => el.id === id);
    }

    set addFriend(friend) {
        let list = [...this.friendList];
        if (this.friendList.some((el) => el.id === friend.id)) {
            list.append(friend.id);
        } else {
            console.log("Friend exists");
        }
    }

    set removeFriend(friend) {
        this.friendList = this.friendList.filter(
            (record) => record.id !== friend.id
        )
    }


}