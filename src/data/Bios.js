export let Bios = ([

]);

export const addBio = (bio) => {
    Bios.push(bio);
};

export const getUserBio = (id) => {
    let bio = Bios.filter((el) => el.user.id === id);
    return bio ? bio : null;
};

export const getNextBio = (currentId, myId) => {
    if (currentId === "") {
        return Bios[0];
    }
    if (currentId !== myId) {
        let next = Bios.indexOf(Bios.filter((el) => el.user.id === currentId));
        if (next+1 === Bios.filter((el) => el.user.id !== myId).length) {
            return null;
        } else {
            return Bios[ ++next ];
        }
    }
};

export const removeBio = (id) => {
    Bios = Bios.filter((el) => el.user.id !== id);
};