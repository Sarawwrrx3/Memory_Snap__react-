import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { getOneAlbum, removeAlbum } from "../../store/album";
import albumLogo from "./album-book.png";
import "./album.css";

function SeeOneAlbum() {
    const dispatch = useDispatch();
    const history = useHistory();
    const { albumID } = useParams();
    // console.log("what is albumID??", albumID);
    const albumSelect = useSelector((state) => state.albums);
    console.log("what is albumSelect? ", albumSelect);
    
    useEffect(() => {
        dispatch(getOneAlbum(albumID));
    }, [dispatch, albumID]);

    // after deleting the album, goes to home page
    const handleDelete = async (e, id) => {
        e.preventDefault();
        // console.log("seeOneAlbummm albumID:", id);
        const deleteTheAlbum = await dispatch(removeAlbum(id));

        if (deleteTheAlbum) {
            history.push("/albums");
        }
    };

    return (
        <div>
            <div className="show-album-div">
                <div className="main-album-container">
                    <div className="album-image-container">
                        <img
                            src={albumLogo}
                            alt="album-icon"
                            className="album-image"
                        />
                        <p className="album-content">{albumSelect?.title}</p>
                    </div>
                </div>

                <div className="button-row">
                    <button
                        className="delete-button"
                        onClick={(e) => handleDelete(e, albumID)}
                    >
                        Delete
                    </button>
                    <button
                        className="update-button"
                        onClick={(e) => history.push(`/albums/${albumID}/edit`)}
                    >
                        Update
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SeeOneAlbum;
