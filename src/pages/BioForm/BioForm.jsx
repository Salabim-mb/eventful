import React, {useState} from "react";
import {SingleLineGridList} from "containers/SingleLineGridList";
import {useStyles} from "styles/bioFormStyle";
import Button from "@material-ui/core/Button";
import PhotoCamera from "@material-ui/icons/PhotoCameraIcon";
import {TextField} from "@material-ui/core";

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
                accept="image/*"
                className={theme.fileInput}
                id="contained-button-file"
                multiple
                type="file"
            />
            <label htmlFor="contained-button-file">
                <Button
                    variant="contained"
                    color="primary"
                    {...data.length >= 5 && "disabled"}
                    endIcon={<PhotoCamera />}
                >
                    Add photo ({data.length} / 5)
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
            />
            <TextField
                id="outlined-multiline"
                label="Add bio"
                multiline
                fullWidth
                rows={4}
                value={bio}
                onChange={e => setBio(e.target.value)}
                variant="outlined"
            />
            <Button fullWidth variant="contained" color="primary" disableElevation>
                Save
            </Button>
        </>

    )
};