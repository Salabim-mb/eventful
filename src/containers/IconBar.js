import React from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import {Facebook, Instagram, Reddit} from "@material-ui/icons";
import {makeStyles} from "@material-ui/core/styles";

const style = makeStyles(theme => ({
    iconBar: {
        marginTop: theme.spacing(5)
    }
}));

const IconBar = ({fauth, iauth, rauth}) => (
    <ButtonGroup color="text" aria-label="text secondary button group" className={style.iconBar}>
        <Button onClick={fauth}>
            <Facebook />
        </Button>
        <Button onClick={iauth}>
            <Instagram />
        </Button>
        <Button onClick={rauth}>
            <Reddit />
        </Button>
    </ButtonGroup>
);

export default IconBar;