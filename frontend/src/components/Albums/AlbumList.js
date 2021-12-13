import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { Link } from "react-router-dom";
import { getAlbums } from "../../store/album";
import albumLogo from "./album-book.png";
import AddAlbumButton from "../Buttons/AddAlbumButton";
import "./album.css";

function AlbumList() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);

    const albumsArr = useSelector((state) => Object.values(state.albums));
    // console.log("sdfasdfa", albumsArr);

    useEffect(() => {
        dispatch(getAlbums(user));
    }, [dispatch, user]);

    return (
        <div className="album-list-container">
            <AddAlbumButton />
            {/* <div>
                <Link className="link-profile" to="/home">
                    <button className="go-to-profile-btn">Profile</button>
                </Link>
            </div> */}
            <div className="main-album-container">
                {/* {if (!albums) {}} */}
                {albumsArr?.map((album, index) => (
                    <div className="album-image-container" key={index}>
                        <Link
                            className="link-per-album"
                            to={`/albums/${album.id}`}
                        >
                            <img
                                src={albumLogo}
                                alt="album-icon"
                                className="album-image"
                            />
                        </Link>
                        <p className="album-content">{album.title}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AlbumList;
