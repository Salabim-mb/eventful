import React from 'react';
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import Divider from "@material-ui/core/Divider";
import EventCard from "containers/EventCard";
import {useStyles} from "styles/eventCardStyle";

const EventList = ({theme}) => {

    const groups = [
        'This week', 'Next week', 'This month', 'This year'
    ];

    const eventList = [
        {
            id: 1,
            name: "qwe",
            date: new Date(2020, 9, 30),
            time: "17:00",
            summary: "qweqweqweqweqwe",
            description: "qweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqweqwe"
        }
    ];

    const groupElements = (array, parameter) => {
        const compare = (itemA, itemB) => {
            if (itemA.date >= itemB.date) return 1;
            if (itemA.date <= itemB.date) return -1;
            return 0;
        };

        let start = new Date();
        let stop = new Date();

        array.sort(compare);
        switch (parameter) {
            case 'This week':
                stop.setDate(stop.getDate() + 7);
                break;
            case 'Next week':
                start.setDate(start.getDate() + 7);
                stop.setDate(stop.getDate() + 14);
                break;
            case 'This month':
                start.setDate(start.getDate() + 14);
                stop.setDate(stop.getMonth() + 1);
                break;
            case 'This year':
                start.setDate(start.getMonth() + 1);
                stop.setDate(start.getFullYear() + 1);
                break;
            default: return null;
        }
        let resultArray = [];

        for (let item in array) {
            if (item.date > start && item.date < stop) {
                resultArray += item;
            }
        }

        return resultArray;
    };

    const cardTheme = useStyles();

    return (
        <List className={theme.list}>
            {groups.map((name, id) => (
                <li key={id} className={theme.listSection}>
                    <ul className={theme.ul}>
                        <ListSubheader>{name}</ListSubheader>
                        <Divider variant="middle"/>
                        {groupElements(eventList, name) === [] ? "No events." :
                            groupElements(eventList, name).map((item) => (
                            <EventCard key={item.id} theme={cardTheme} data={item.data} isAccepted={item.status}/>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
};

export default EventList;