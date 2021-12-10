import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addPhoto } from "../../store/photos";

import "./photoModal.css";

function AddPhotoModal() {
    const dispatch = useDispatch();
    const history = useHistory();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    // const [content, setContent] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [album, setAlbum] = useState("");
    const [file, setFile] = useState(null);

    const [validationErrors, setValidationErrors] = useState([]);
    // const [validationErrors, setValidationErrors] = useState([]);

    // const validContent = (e) => setContent(e.target.value);
    const validImageUrl = (e) => setImageUrl(e.target.value);
    const validTitle = (e) => setTitle(e.target.value);
    const validDescription = (e) => setDescription(e.target.value);
    const validAlbumID = (e) => setAlbum(e.target.value);

    const userID = useSelector((state) => state.session?.user?.id);
    const albumID = useSelector((state) => Object.values(state.albums));

    useEffect(() => {
        const errors = [];

        if (title.length > 50)
            errors.push("Title must be less than 50 characters");
        if (description.length > 200)
            errors.push("Description must be less than 200 characters");
        if (!imageUrl) errors.push("Upload an Image");
        setValidationErrors(errors);
    }, [title, description, imageUrl]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const NewSinglePhotoData = {
            userID,
            title,
            description,
            imageUrl,
            albumID,
        };
        const newPhoto = await dispatch(addPhoto(NewSinglePhotoData));
        // console.log("This is a AddOnePhoto component", newPhoto);
        if (newPhoto) {
            // history.push("/home");
            history.push(`/photos/${newPhoto.id}`);
        }
        // return newPhoto;
    };

    // sees preview of photo before uploading
    const fileHandler = (e) => {
        setFile(e.target.files[0]);
    };

    // // EDIT / UPDATE
    // const handleUpdate = async (e, id) => {
    //     e.preventDefault();
    //     console.log("sfsdfsf----", photoID);
    //     const updateThePhoto = await dispatch(editPhoto(photoID));
    //     if (updateThePhoto) {
    //         history.push(`/photos/${photoID}`);
    //     }
    // };

    //! after uploading... go to /photos/${photoID.id}
    // history.push(`/photos/${photoID.id}/edit`);

    // need usestate
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="left-section1">
                        <div>
                            <h3> See Preview before uploading: </h3>
                            <img
                                src={file ? URL.createObjectURL(file) : null}
                                alt={file ? file.name : null}
                            />
                            {/* <input type="file" onChange={fileHandler} /> */}
                        </div>
                    </div>

                    {/* <div className="section3">
                        <div className="save_from_site">Save from site</div>
                    </div> */}
                </div>

                <div className="side" id="right_side">
                    <div className="right-section1">
                        <div className="select_album">
                            <select
                                defaultValue="Select"
                                name="album_name"
                                id="album_name"
                            >
                                <option value="">Pick an Album</option>
                                {albumID.map((album, index) => (
                                    <option key={index} value={album}>
                                        {album.title}
                                    </option>
                                ))}
                            </select>
                            {/* <div className="save_pin">Save</div> */}
                        </div>
                    </div>
                    {/* FORM  */}
                    <div className="right-section2">
                        <div id="add-photo-div">
                            <form onSubmit={handleSubmit}>
                                <div id="add-image-title">
                                    <div id="errors-for-img">
                                        <ul>
                                            {/* {validationErrors && validationErrors.map(errors =>
                <li key={errors}>{errors}</li>)} */}
                                        </ul>
                                    </div>
                                    <label>
                                        Title
                                        <input
                                            placeholder="Add your title"
                                            className="new_image_input"
                                            id="input-field"
                                            type="text"
                                            value={title}
                                            onChange={validTitle}
                                            required
                                        />
                                    </label>
                                </div>

                                <div id="add-image-description">
                                    <label>
                                        Description
                                        <input
                                            placeholder="Tell everyone what your photo is about"
                                            className="new_image_input"
                                            id="input-field"
                                            type="text"
                                            value={description}
                                            onChange={validDescription}
                                            required
                                        />
                                    </label>
                                </div>

                                <div id="add-image-url">
                                    <label>
                                        ImageUrl
                                        <input
                                            placeholder="Add Image URL"
                                            className="new_image_input"
                                            id="input-field"
                                            type="text"
                                            value={imageUrl}
                                            onChange={validImageUrl}
                                            required
                                        />
                                    </label>
                                </div>

                                <button id="add-photo-btn" type="submit">
                                    Post Your Photo
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddPhotoModal;

//! ADD ---- uploads ONE photo

// "right-side" ---- Section 1 ----- this will be to choose album

// P1nt2
