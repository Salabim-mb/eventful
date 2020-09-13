import React, {useContext, useEffect, useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "styles/meetStyle";
import {PersistentContext} from "../../context/PersistentContext";
import {getUserById, getUserByToken} from "../../data/Users";
import {getNextBio} from "../../data/Bios";

const Meet = () => {
    const theme = useStyles();
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [data, setData] = useState({
        id: "",
        name: "",
        age: "",
        bio: "",
        photos: []
    });

    const context = useContext(PersistentContext);

    useEffect(() => {
        handleNext();
    }, [context]);

    let handleNext = () => {
        let currentUser = getUserByToken(context?.token);
        let bio = getNextBio(data.id, currentUser.getId);
        setData({
            id: bio.id,
            name: bio.user.name + " " + bio.user.surname,
            age: bio.age,
            bio: bio.bio,
            photos: bio.photos
        });
    };

    return (
        <Card className={theme.root}>
            <CardActionArea>
                <CardMedia
                    className={theme.media}
                    image={data.photos[currentPhoto]}
                    onClick={() => (setCurrentPhoto((currentPhoto + 1) % data.photos.length))}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="h2">
                        <b>{data.name}</b>, <h5>{data.age}</h5>
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {data.bio}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary" onClick={() => {
                    let user = getUserByToken(context?.token);
                    user.addFriend = data.id;
                    handleNext();
                }}>
                    Add friend
                </Button>
                <Button size="small" color="primary" onClick={() => {

                }}>
                    Skip
                </Button>
            </CardActions>
        </Card>
    );
};

export default Meet;