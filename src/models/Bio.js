export class Bio {
    constructor(user, age, bio, photos) {
        this.user = user;
        this.age = age;
        this.bio = bio;
        this.photos = photos;
    }

    get getData() {
        return this;
    }

    get newPersonId() {
        return this.user.id;
    }
}