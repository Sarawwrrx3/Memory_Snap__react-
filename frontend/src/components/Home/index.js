import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getAllThePhotos } from "../../store/photos";

function Home() {
    const dispatch = useDispatch();
    const photos = useSelector(state => state.photos)

    useEffect(() => {
        dispatch(getAllThePhotos());
    }, [dispatch]);

    return (
        <div>
            <ul>
                {Object.values(photos).map((photo) => (
                    <li key={photo.id}>{photo.content}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

//TODO: add All the photos (from ALL users) in this page
//TODO: Add Album button
// getAllThePhotos
// all photos are public
