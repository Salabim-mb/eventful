class Event {
    constructor(name, dateStart, dateEnd, description, guests) {
        this.name = name;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.description = description;
        this.guests = guests || [];
    }

    get getEvent() {
        return this;
    }

    set addGuest(guest) {
        this.guests.push(guest);
    }
}