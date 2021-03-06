import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPhoto } from "../../store/photos";

import "./photoModal.css";

function EditPhotoModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoID } = useParams();

    const [title, setTitle] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [description, setDescription] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);
    // console.log(
    //     "validationError. to get rid of yellow warnings",
    //     validationErrors
    // );
    // const validTitle = (e) => setTitle(e.target.value);
    // const validImageUrl = (e) => setImageUrl(e.target.value);
    // const validDescription = (e) => setDescription(e.target.value);

    // const userId = useSelector((state) => state.session?.user?.id);
    const photoSelect = useSelector((store) => store.photos[photoID]);

    useEffect(() => {
        const errors = [];

        if (title.length > 50)
            errors.push("Title must be less than 50 characters");
        if (description.length > 200)
            errors.push("Description must be less than 200 characters");
        if (!imageUrl) errors.push("Upload an Image");
        setValidationErrors(errors);
    }, [title, description, imageUrl]);

    const handleUpdate = async (e, id) => {
        e.preventDefault();

        const payload = {
            ...photoSelect,
            title,
            description,
            imageUrl,
            id: photoID,
        };
        const updateThePhoto = await dispatch(editPhoto(payload, photoID));
        // photoSelect ------ "post" object
        if (updateThePhoto) {
            history.push(`/photos/${photoID}`);
            // history.push(`/photos/${photoID.id}/edit`);
        }
    };

    return (
        <div id="edit-photo-div">
            <form className="edit-form-main" onSubmit={handleUpdate}>
                <div id="edit-photo-title">
                    <div id="errors-for-img">
                        <ul>
                            {/* {validationErrors && validationErrors.map(errors =>
                <li key={errors}>{errors}</li>)} */}
                        </ul>
                    </div>

                    <div className="photo-detail">
                        <img
                            id="image-upload"
                            src={photoSelect?.imageUrl}
                            alt={photoSelect?.title}
                        />
                        {/* <span className="photo-title">{name}</span> */}
                        <span className="photo-content">
                            {photoSelect?.title}
                        </span>
                    </div>

                    <label>
                        Title
                        <input
                            id="input-field"
                            type="text"
                            placeholder="New Content"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                        />
                    </label>

                    <label>
                        Description
                        <input
                            id="input-field"
                            type="text"
                            placeholder="New Content"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </label>
                </div>
                <div id="add-image-url">
                    <label>
                        ImageUrl
                        <input
                            id="input-field"
                            type="text"
                            required
                            placeholder="New Image Url"
                            value={imageUrl}
                            onChange={(e) => setImageUrl(e.target.value)}
                        />
                    </label>
                </div>
                <button id="post-updated-photo-btn" type="submit">
                    Edit Photo
                </button>
                {/* <NavLink to="/home">
                    <button id="post-photo-btn" type="submit">
                        Edit Post
                    </button>
                </NavLink> */}
            </form>
            {/* <DeletePhoto photoId={photoId} /> */}
        </div>
    );
}

export default EditPhotoModal;
