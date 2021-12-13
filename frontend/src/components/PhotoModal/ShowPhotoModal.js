// photodetail

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { removePhoto, getOnePhoto } from "../../store/photos";

import "./photoModal.css";

// import CloseIcon from "@mui/icons-material/Close";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

function ShowPhotoModal() {
    const dispatch = useDispatch();
    const history = useHistory();
    // const photos = useSelector((state) => Object.values(state.photos));
    const { photoID } = useParams(); // EX: http://localhost:3000/photos/18 ----- 18 ("photoID") from ---- APP.js ---- path="/photos/:photoID"

    const photoSelect = useSelector((state) => state.photos[photoID]);
    // const post = useSelector((state) => state.photos[photoID] )
    // "photos" is from store/index.js ---- "photos: photosReducer,"
    // console.log("photo from userSelector", photoSelect);
    // console.log("testing props", onePhoto);
    // const [open, setOpen] = useState(false);

    useEffect(() => {
        dispatch(getOnePhoto(photoID));
    }, [dispatch, photoID]);

    // after deleting the photo, goes to home page
    const handleDelete = async (e, id) => {
        e.preventDefault();
        console.log("ShowPhotoModal PhotoID:", id);
        const deleteThePhoto = await dispatch(removePhoto(id));

        if (deleteThePhoto) {
            history.push("/home");
            window.location.reload()
        }
    };

   
    // const handleClose = () => {
    //     setOpen(false);
    // };

    return (
        <div className="show-photo-modal">
            <div className="photo-detail-container ">
                <div className="photo-uploaded-box">
                    <img
                        id="image-upload"
                        src={photoSelect?.imageUrl}
                        alt={photoSelect?.title}
                    />
                    {/* <span className="photo-title">{name}</span> */}
                    {/* <span className="photo-content">{photoSelect?.title}</span> */}
                </div>

                <div className="photo-detail-btn-container">
                    <div className="photo-details">
                        <h2>{photoSelect?.title} </h2>
                        <p> {photoSelect?.description}</p>
                    </div>

                    <div className="button-row">
                        <button
                            className="delete-button"
                            onClick={(e) => handleDelete(e, photoID)}
                        >
                            Delete
                        </button>
                        <button
                            className="update-button"
                            onClick={(e) => history.push(`/photos/${photoID}/edit`)}
                        >
                          Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowPhotoModal;

//! GET ONE photo

//! DELETE & EDIT
