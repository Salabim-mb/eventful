import React, {useState} from "react";
import {SingleLineGridList} from "containers/SingleLineGridList";
import {useStyles} from "styles/bioFormStyle";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

const BioForm = () => {
    const theme = useStyles();
    const [data, setData] = useState([]);
    const [age, setAge] = useState(18);
    const [bio, setBio] = useState("");


    const deletePhoto = (id) => {
        const newData = data.filter((photo) => photo.id !== id);
        setData(newData);
    };

    const addPhotos = (e) => {

    };

    return (
        <>
            <SingleLineGridList theme={theme} data={data} onPhotoClick={deletePhoto}/>
            <input
                hidden
                type="file"
                multiple
                accept="image/*"
                id="photo"
                onChange={addPhotos}
            />
            <label htmlFor="photo">
                <Button
                    component="span"
                    color="primary"
                    variant="outlined"
                    onClick={addPhotos}
                    fullWidth
                    className={theme.addPhotoButton}
                >
                    Add photos
                </Button>
            </label>
            <TextField
                id="age-number"
                label="Your age"
                type="number"
                value={age}
                onChange={(e) => setAge(e.target.value)}
                InputLabelProps={{
                    shrink: true
                }}
                variant="outlined"
            />
            <TextField
                id="outlined-multiline"
                className={theme.bio}
                label="Add bio"
                multiline
                fullWidth
                rows={4}
                value={bio}
                onChange={e => setBio(e.target.value)}
                variant="outlined"
            />
            <AppBar className={theme.appBar} position="fixed" color="primary">
                <Button className={theme.acceptButton} fullWidth variant="contained" color="primary" disableElevation>
                    Save
                </Button>
            </AppBar>
        </>

    )
};

export default BioForm;