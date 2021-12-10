import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editPhoto, getAllThePhotos } from "../../store/photos";

import "./photoModal.css";

function EditPhotoModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoID } = useParams();

    const [content, setContent] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    const validTitle = (e) => setContent(e.target.value);
    // const validImgUrl = (e) => setImgUrl(e.target.value);

    const userId = useSelector((state) => state.session?.user?.id);
    const photoSelect = useSelector((store) => store.photos[photoID]);
    // console.log("gfsdfgdf", photoSelect);

    useEffect(() => {
        // dispatch(getAllThePhotos());
        const errors = [];
        if (content.length > 20)
            errors.push("content must be less than 20 characters");
        if (!imgUrl) errors.push("Upload an Image");
        setValidationErrors(errors);
    }, [dispatch, content, imgUrl]);

    // useEffect(() => {
    //     dispatch(getAllThePhotos());
    // }, [dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const post = { userId, content, imgUrl };
        // console.log("fgasdf", photoID);
        const editPost = await dispatch(editPhoto(photoID, post));

        // const editPost = await dispatch(editPhoto(post));

        if (editPost) {
            history.push(`/photos/${photoID}`);
            // history.push(`/photos/${photo.id}`);
        }

        return editPost;
    };

    return (
        <div id="edit-photo-div">
            <form className="edit-form-main" onSubmit={handleSubmit}>
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
                            alt={photoSelect?.content}
                        />
                        {/* <span className="photo-title">{name}</span> */}
                        <span className="photo-content">
                            {photoSelect?.content}
                        </span>
                    </div>

                    <label>
                        Content
                        <input
                            id="input-field"
                            type="text"
                            placeholder="New Content"
                            value={content}
                            onChange={validTitle}
                            required
                        />
                    </label>
                </div>
                <div id="add-image-url">
                    {/* <label>
                        ImageUrl
                        <input
                            id="input-field"
                            type="text"
                            required
                            placeholder="New Image Url"
                            value={imgUrl}
                            onChange={validImgUrl}
                            required
                        />
                    </label> */}
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
