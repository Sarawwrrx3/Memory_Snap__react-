import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { editAlbum } from "../../store/album";
import albumLogo from "./album-book.png";

import "./album.css";

function EditTheAlbum() {
        const dispatch = useDispatch();
        const history = useHistory();
        const { albumID } = useParams();

        const [title, setTitle] = useState("");
        const [validationErrors, setValidationErrors] = useState([]);
        // console.log(
        //     "validationError. to get rid of yellow warnings",
        //     validationErrors
        // );

        // const userId = useSelector((state) => state.session?.user?.id);
        const albumSelect = useSelector((store) => store.photos[albumID]);

        useEffect(() => {
            const errors = [];

            if (title.length > 50)
                errors.push("Title must be less than 50 characters");
    
            setValidationErrors(errors);
        }, [title,]);



        const handleUpdate = async (e, id) => {
            e.preventDefault();

            const payload = {
                // ...albumSelect,
                title,
                id: albumID,
            };

            const updateTheAlbum = await dispatch(editAlbum(payload, albumID));
            // albumSelect ------ "post" object
            if (updateTheAlbum) {
                history.push(`/albums/${albumID}`);
                // history.push(`/photos/${albumID.id}/edit`);
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
                                src={albumLogo}
                                alt={albumSelect?.title}
                            />
                            {/* <span className="photo-title">{name}</span> */}
                            <span className="photo-content">
                                {albumSelect?.title}
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
                    </div>

                    <button id="post-updated-photo-btn" type="submit">
                        Edit Photo
                    </button>
                </form>
            </div>
        );
}

export default EditTheAlbum;
