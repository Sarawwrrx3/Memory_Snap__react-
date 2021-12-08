import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";


import { getAllThePhotos } from "../../store/photos";

function Home() {
    const dispatch = useDispatch();
    // const photos = useSelector(state => state.photos)
    const photosArr = useSelector((state) => Object.values(state.photos));
    // console.log("reerere", photos)


    useEffect(() => {
        dispatch(getAllThePhotos());
    }, [dispatch]);

    return (
        <div className="main-photo-container">
            <Link className="link-profile" to="/home">
                <button className="go-to-profile-btn">Profile</button>
            </Link>
            <div className="photo-list-container">
                {photosArr.map((image) => (
                    <div key={image.id}>
                        <img
                            className="each-img"
                            src={image.imageUrl}
                            alt="cat"
                        />
                    </div>
                ))}
            </div>
        </div>
        // <div>
        //     <ul>
        //         {photos?.map((photo) => (
        //             <li key={photo.id}>{photo.content}</li>
        //         ))}
        //         {/* {Object.values(photos).map((photo) => (

        //             <li key={photo.id}>{photo.content}</li>
        //         ))} */}
        //     </ul>
        // </div>
    );
}

export default Home;

//TODO: add All the photos (from ALL users) in this page
//TODO: Add Album button
// getAllThePhotos
// all photos are public
