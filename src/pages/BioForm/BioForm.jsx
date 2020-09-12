import React, {useContext, useState} from "react";
import {SingleLineGridList} from "containers/SingleLineGridList";
import {useStyles} from "styles/bioFormStyle";
import Button from "@material-ui/core/Button";
import {TextField} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import {PersistentContext} from "context/PersistentContext";
import CustomSnackBar from "containers/CustomSnackbar";
import {getUserByToken} from "../../data/Users";
import {Bio} from "../../models/Bio";
import {addBio, removeBio} from "../../data/Bios";
import {SettingsContext} from "../../context/SettingsContext";

const updateBio = (data, token, settings) => {
    try {
        let user = getUserByToken(token);
        let bio = new Bio(user, data.age, data.bio, data.photos);
        removeBio(user.id);
        addBio(bio);
        settings.changeSettings({meet: true});
    } catch(e) {
        throw e.stackTrace;
    }
};

const BioForm = () => {
    const theme = useStyles();
    const [age, setAge] = useState(18);
    const [bio, setBio] = useState("");
    const [photos, setPhotos] = useState([]);
    const [showModal, setShowModal] = useState(false);
    let fileInput = React.createRef();
    let settings = useContext(SettingsContext);

    let context = useContext(PersistentContext);


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

    const validateForm = (e) => {
        e.preventDefault();
        let form = e.currentTarget;
        if (form.checkValidity() !== true || photos.length === 0) {
            e.stopPropagation();
        } else {
            try {
                updateBio({
                    photos: photos,
                    bio: bio,
                    age: age
                }, context.token, settings);
                setShowModal(true);
                setTimeout(() => setShowModal(false), 3000);
            } catch(e) {
                console.log(e);
            }
        }
    };

    return (
        <>
            <SingleLineGridList theme={theme} data={photos} onPhotoClick={deletePhoto}/>
            <form
                noValidate
                onSubmit={validateForm}
            >
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
                        disabled={photos.length === 5}
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
                    required
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
                    required
                    rows={4}
                    value={bio}
                    onChange={e => setBio(e.target.value)}
                    variant="outlined"
                />
                {console.log(fileInput)}
                <AppBar className={theme.appBar} position="fixed" color="primary">
                    <Button
                        className={theme.acceptButton}
                        fullWidth
                        variant="contained"
                        color="primary"
                        disableElevation
                        type="submit"
                    >
                        Save
                    </Button>
                </AppBar>
            </form>
            {showModal && <CustomSnackBar message="Bio has been set up."/>}
        </>

    )
};

export default BioForm;