import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

import * as sessionActions from "./store/session";

import { getPhotos } from "./store/photos";

import "./index.css";
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import Home from "./components/Home";
import AlbumList from "./components/Albums/AlbumList";
import AddPhotoModal from "./components/PhotoModal/AddPhotoModal"; // since there's no "index".
// import AddOnePhoto from "./components/Photos/AddOnePhoto";
// import ShowOnePhoto from "./components/Photos/ShowOnePhoto";
import LoginFormModal from "./components/LoginFormModal";
import ShowPhotoModal from "./components/PhotoModal/ShowPhotoModal";
import EditPhotoModal from "./components/PhotoModal/EditPhotoModal";
import AddOneAlbum from "./components/Albums/AddOneAlbum";
import SeeOneAlbum from "./components/Albums/SeeOneAlbum";
import EditTheAlbum from "./components/Albums/EditTheAlbum";

function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    // const [selectedImg, setSelectedImg] = useState(null); / trying to make it pop-up

    useEffect(() => {
        dispatch(getPhotos());
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    {/* for space purposes */}
                    <Route exact path="/">
                        <SplashPage />
                    </Route>
                    {/* for space purposes */}
                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>
                    {/* for space purposes */}
                    <Route path="/login">
                        <LoginFormModal />
                    </Route>
                    {/* for space purposes */}
                    <Route path="/home">
                        <Home />
                    </Route>
                    {/* for space purposes */}
                    <Route path="/photos/add">
                        <AddPhotoModal />
                    </Route>
                    {/* for space purposes */}
                    <Route exact path="/photos/:photoID">
                        <ShowPhotoModal />
                    </Route>
                    {/* for space purposes */}
                    <Route path="/photos/:photoID/edit">
                        <EditPhotoModal />
                    </Route>
                    {/* for space purposes */}
                    <Route exact path="/albums">
                        <AlbumList />
                    </Route>
                    {/* for space purposes */}
                    <Route exact path="/albums/add">
                        <AddOneAlbum />
                    </Route>
                    {/* for space purposes */}
                    <Route exact path="/albums/:albumID">
                        <SeeOneAlbum />
                    </Route>
                    {/* for space purposes */}
                    <Route exact path="/albums/:albumID/edit">
                        <EditTheAlbum />
                    </Route>
                    {/* for space purposes */}
                    
                </Switch>
            )}
        </>
    );
}
export default App;
