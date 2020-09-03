import React, {useState} from "react";
import {SingleLineGridList} from "containers/SingleLineGridList";
import {useStyles} from "styles/bioFormStyle";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";

const BioForm = () => {
    const theme = useStyles();
    const [age, setAge] = useState(18);
    const [bio, setBio] = useState("");
    const [photos, setPhotos] = useState([]);
    let fileInput = React.createRef();


    const deletePhoto = (id) => {
        const newData = photos.filter((photo) => photo.id !== id);
        setPhotos(newData);
    };

    const addPhotos = (e) => {
        const file = fileInput.current.files[0];
        let newPhotos = [...photos];
        let photo = {
            id: photos.length,
            img: file,
            title: file.name
        };
        newPhotos.append(photo);
        setPhotos(newPhotos);
        fileInput = React.createRef();
    };

    return (
        <>
            <SingleLineGridList theme={theme} data={photos} onPhotoClick={deletePhoto}/>
            <input
                hidden
                type="file"
                multiple
                accept="image/*"
                id="photo"
                onChange={addPhotos}
                ref={(ref) => fileInput.current = ref}
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
            {console.log(fileInput)}
            <AppBar className={theme.appBar} position="fixed" color="primary">
                <Button className={theme.acceptButton} fullWidth variant="contained" color="primary" disableElevation>
                    Save
                </Button>
            </AppBar>
        </>

    )
};

export default BioForm;