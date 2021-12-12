import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addNewAlbum } from "../../store/album";
// import { NavLink } from "react-router-dom";
import "./album.css";

function AddOneAlbum() {
    const dispatch = useDispatch();
    const history = useHistory();

    // const [userID, setUserID] = useState("");
    const [title, setTitle] = useState("");
    const [validationErrors, setValidationErrors] = useState([]);

    const validTitle = (e) => setTitle(e.target.value);
    // const validimgUrl = (e) => setImgUrl(e.target.value);
    // const validUserID = (e) => setUserID(e.target.value);

    const userID = useSelector((state) => state.session?.user?.id);
    // const userId = useSelector((state) => state.session);

    //error
    useEffect(() => {
        const errors = [];

        if (title.length > 50)
            errors.push("Title must be less than 50 characters");
        setValidationErrors(errors);
    }, [title]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const album = { title, userID }; // payload
        // const album = { userIdentity, title };
        const newAlbum = await dispatch(addNewAlbum(album));
        console.log("new album id is:", newAlbum.id);
        if (newAlbum) {
            // history.push("/home");
            history.push("/albums");
            return;
            // history.push(`/albums/${newAlbum.id}`);
            // return <Redirect to="/albums" />;
        }
    };

    return (
        <div className="add-album-div">
            <form onSubmit={handleSubmit}>
                <div id="add-album-title">
                    <label>
                        Title
                        <input
                            id="input-field"
                            type="text"
                            value={title}
                            onChange={validTitle}
                            required
                        />
                    </label>
                </div>
                {/* <div id="add-image-url">
                    <label>
                        userID
                        <input
                            id="input-field"
                            type="text"
                            value={userID}
                            onChange={validUserID}
                            required
                        />
                    </label>
                </div> */}

                <button id="add-album-btn" type="submit">
                    Create Album
                </button>
            </form>
        </div>
    );

}

export default AddOneAlbum;
