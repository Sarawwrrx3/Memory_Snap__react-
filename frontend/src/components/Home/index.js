import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import AddAlbumPhotoButton from "../Buttons/AddAlbumPhotoButton";
import ShowPhotoModal from "../PhotoModal/ShowPhotoModal";
import { Link, useParams } from "react-router-dom";
import "./home.css";

import { getAllThePhotos, getOnePhoto } from "../../store/photos";

function Home() {
    const dispatch = useDispatch();
    // const photos = useSelector(state => state.photos)
    const { photoID } = useParams(); // EX: http://localhost:3000/photos/18 ----- 18 ("photoID") from ---- APP.js ---- path="/photos/:photoID"
    console.log("what's photoID: ", photoID);
    
    const params = useParams();
    console.log("whats params", {params});
    
    const photoSelect = useSelector((state) => state.photos[photoID]);
    const photosArr = useSelector((state) => Object.values(state.photos));
    console.log("reerere", photoSelect);

    useEffect(() => {
        dispatch(getAllThePhotos());
        dispatch(getOnePhoto(photoID));
    }, [dispatch, photoID]);

    return (
        <div className="home-photo-container">
            <AddAlbumPhotoButton />
            <div className="photo-list-container">
                {photosArr.map((image, index) => (
                    <div
                        key={index}
                        // onClick={(e) => setSelectedImg(image.imageUrl)}
                    >

                            <img
                                className="each-img"
                                src={image.imageUrl}
                                alt="cat"
                            />
                      
                    </div>
                    
                ))}
            </div>
        </div>
    );
}

export default Home;

//TODO: add All the photos (from ALL users) in this page
//TODO: Add Album button
// getAllThePhotos
// all photos are public


// {
//     /* <div
//                         key={index}
//                         // onClick={(e) => setSelectedImg(image.imageUrl)}
//                     >
//                         <Link className="edit-home" to={`/photos/${photoID}`}>
//                             <img
//                                 className="each-img"
//                                 src={image.imageUrl}
//                                 alt="cat"
//                             />
//                         </Link>
//                     </div> */
// }