import React from "react";
// import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function AddAlbumButton() {
 
    return (
        <div>
            <div className="add-album-btn">
                <Link className="link-add-album" to="/albums/add">
                    <button className="go-to-profile-btn">Add Album</button>
                </Link>
            </div>
            
        </div>
    );
}

export default AddAlbumButton;
