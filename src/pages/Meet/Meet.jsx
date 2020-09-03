import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import {useStyles} from "styles/meetStyle";

const Meet = () => {
    const theme = useStyles();
    const [currentPhoto, setCurrentPhoto] = useState(0);
    const [data, setData] = useState({
        name: "",
        age: "",
        bio: "",
        photos: []
    });

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
                <Button size="small" color="primary">
                    Accept
                </Button>
                <Button size="small" color="primary">
                    Skip
                </Button>
            </CardActions>
        </Card>
    );
};

export default Meet;