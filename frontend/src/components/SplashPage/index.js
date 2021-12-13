import React from "react";
// import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// import * as sessionActions from '../../store/session';
import LoginFormModal from "../LoginFormModal";
import Navigation from "../Navigation";
import photoAlbumPicture from "./images/photo-album-pictures-photography2.jpeg";
import DemoUser from "../DemoUser";
import "./splashpage.css";

function SplashPage() {
    const dispatch = useDispatch();

    // const handleClick = () => {
    //      dispatch(sessionActions.demoLogin())
    // };

    return (
        <div className="page-wrapper">
            <img src={photoAlbumPicture} alt="main-splash-img" />
            <div className="div-demo-container">
                <h3 className="content-wrapper">Please click for Demo:</h3>

                <DemoUser className="demo-userrr" />
            </div>
            
        </div>
    );
}

export default SplashPage;
