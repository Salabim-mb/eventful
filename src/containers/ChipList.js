import React from "react";
import Chip from "@material-ui/core/Chip";
import Avatar from "@material-ui/core/Avatar";

const ChipList = ({list, cutItem}) => {

    const cut = (e) => {
        let newList = [...list];
        newList.filter((item) => item.id !== e.target.value.id);
        cutItem(e.target.value);
    };

    return (
        <div>
            {
                list.map((item) => (
                    <Chip
                        icon={<Avatar>{item.name.charAt(0)}</Avatar>}
                        label={item.name}
                        clickable
                        color="primary"
                        onDelete={cut}
                        variant="outlined"
                    />
                ))
            }
        </div>
    );
};

export default ChipList;