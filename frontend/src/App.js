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
import PhotoModal from "./components/PhotoModal";
import OnePhotoPin from "./components/OnePhotoPin";



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

                    <Route path="/photos/:photoID">
                        <PhotoModal />
                    </Route>

                    <Route path="/photos/:photoID">
                        <OnePhotoPin />
                    </Route>
                </Switch>
            )}
        </>
    );
}
export default App;
