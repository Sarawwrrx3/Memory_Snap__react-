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
import AddPhotoModal from "./components/PhotoModal/AddPhotoModal"; // since there's no "index". 
// import AddOnePhoto from "./components/Photos/AddOnePhoto";
// import ShowOnePhoto from "./components/Photos/ShowOnePhoto";
import ShowPhotoModal from "./components/PhotoModal/ShowPhotoModal";
import EditPhotoModal from "./components/PhotoModal/EditPhotoModal"


function App() {
    const dispatch = useDispatch();
    const [isLoaded, setIsLoaded] = useState(false);
    
    useEffect(() => {
        dispatch(getPhotos());
        dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
    }, [dispatch]);

    return (
        <>
            <Navigation isLoaded={isLoaded} />
            {isLoaded && (
                <Switch>
                    <Route exact path="/">
                        <SplashPage />
                    </Route>

                    <Route path="/signup">
                        <SignupFormPage />
                    </Route>

                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/photos/add">
                        <AddPhotoModal />
                    </Route>

                    <Route path="/photos/:photoID">
                        <ShowPhotoModal />
                    </Route>

                    <Route path="/photos/:photoID/edit">
                        <EditPhotoModal />
                    </Route>
                </Switch>
            )}
        </>
    );
}
export default App;
