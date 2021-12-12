import React from "react";
import { Link } from "react-router-dom";

function AddPhotoButton() {
    return (
        <div>
            <div className="add-photo-btn">
                <Link className="link-add-photo" to="/photos/add">
                    <button className="go-to-profile-btn">Add Photo</button>
                </Link>
            </div>
        </div>
    );
}

export default AddPhotoButton;
