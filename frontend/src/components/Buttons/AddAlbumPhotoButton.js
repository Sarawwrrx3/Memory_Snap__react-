import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function AddAlbumPhotoButton() {
    // const history = useHistory();

    // const routeChange = () => {
    //     let path = `newPath`;
    //     history.push(path);
    // };
    return (
        <div>
            <div className="add-album-btn">
                <Link className="link-add-album" to="/albums/add">
                    <button className="go-to-profile-btn">Add Album</button>
                </Link>
            </div>
            <div className="add-photo-btn">
                <Link className="link-add-photo" to="/photos/add">
                    <button className="go-to-profile-btn">Add Photo</button>
                </Link>
            </div>
        </div>
    );
}

export default AddAlbumPhotoButton;
