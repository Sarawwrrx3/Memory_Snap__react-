//!from PhotoDetail


import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import "./photo.css";
import { removePhoto, getOnePhoto } from "../../store/photos";


function AddOnePhoto(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const { photoID } = useParams(); // EX: http://localhost:3000/photos/18 ----- 18 ("photoID") from ---- APP.js ---- path="/photos/:photoID"
    const photoSelect = useSelector((state) => state.photos[photoID]);
    // "photos" is from store/index.js ---- "photos: photo

    useEffect(() => {
        dispatch(getOnePhoto(photoID));
    }, [dispatch, photoID]);

    // after deleting the photo, goes to home page
    const handleDelete = async (e, id) => {
        e.preventDefault();

        const deleteThePhoto = await dispatch(removePhoto(id));

        if (deleteThePhoto) {
            history.push("/home");
            //! want to go to user's profile page instead? 
        }
    };

    return (
        // <div>
        //     <input onChange={event => upload_img(event, setPinImage)} type="file" name="picture" id="picture" value="" />

        //     <div className="card">
        <div className={`card card_${props.pinDetails.pin_size}`}>
            <div className="pin_title">{props.pinDetails.title}</div>

            <div className="pin_modal">
                <div className="modal_head">
                    <div className="save_card">Save</div>
                </div>

                <div className="modal_foot">
                    {/* <div className="destination">
                        <div className="pint_mock_icon_container">
                            <img
                                src="./images/upper-right-arrow.png"
                                alt="destination"
                                className="pint_mock_icon"
                            />
                        </div>
                        <span>{props.pinDetails.destination}</span>
                    </div>

                    <div className="pint_mock_icon_container">
                        <img
                            src="./images/send.png"
                            alt="send"
                            className="pint_mock_icon"
                        />
                    </div>

                    <div className="pint_mock_icon_container">
                        <img
                            src="./images/ellipse.png"
                            alt="edit"
                            className="pint_mock_icon"
                        />
                    </div> */}

                    <div className="button-row">
                        <button
                            className="delete-button"
                            onClick={(e) => handleDelete(e, photoID)}
                        >
                            Delete
                        </button>
                        <button
                            className="update-button"
                            // onClick={(e) => handleUpdate(e, photoID)}

                            // color="primary"
                        >
                            <Link
                                className="edit-home"
                                to={`/photos/${photoID}/edit`}
                            >
                                Update
                            </Link>
                        </button>

                    </div>
                </div>
            </div>

            <div className="pin_image">
                {/* <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin_image" /> */}
                <img
                    id="image-upload"
                    src={photoSelect?.imageUrl}
                    alt={photoSelect?.content}
                />
                {/* <span className="photo-title">{name}</span> */}
                <span className="photo-content">{photoSelect?.content}</span>
            </div>
        </div>
        // </div>
    );
}

// const styles = { small: {},medium:{}, large:{}}

export default AddOnePhoto;

//? Similar to PhotoDetail ??
// <div className="one-photo-container" style={{...styles.pin}}> </div>

// class ====== pin_image = photo-detail

// i might move the Span line 84 somewhere

// upload ONE photo

//! MAY NOT USE ANY OF THESE FILES. it will used in AddPhotoModal 