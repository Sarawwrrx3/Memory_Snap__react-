import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import Navigation from "../Navigation";
import "./splashpage.css";
import facebookIcon from "./images/social-media-facebook_icon.png";
import twitterIcon from "./images/social-media-twitter_icon.png";
import instagramIcon from "./images/social-media-instagram-icon.png";
import photoAlbumPicture from "./images/photo-album-pictures-photography2.jpeg"

function SplashPage() {
    return (
        <div className="page-wrapper">
            <img src={photoAlbumPicture} alt="main-splash-img" />
            <section className="header-logo">
                <div className="content-wrapper">
                    {/* <div className="logo">
                        <img src={photoAlbumPicture} alt=" facebook-icon" />
                    </div> */}
                </div>
            </section>

            <section className="login-form">
                <div className="content-wrapper">
                    <p>Login to our WiFi with Social Media</p>
                    <div className="social-login-buttons cf">
                        {/* <a href="https://facebook.com"> */}
                        <img
                            ssrc={facebookIcon}
                            alt="facebook-icon-btn"
                            className="social-icons"
                        />
                        {/* </a>
                        <a href="https://twitter.com"> */}
                        <img
                            src={twitterIcon}
                            alt="twitter-icon-btn"
                            className="social-icons"
                        />
                        {/* </a>
                        <a href="https://instagram.com"> */}
                        <img
                            src={instagramIcon}
                            alt="instagram-icon-btn"
                            className="social-icons"
                        />
                        {/* </a> */}
                    </div>
                    {/* <p>Or login with our <a href="#" [[!RegistrationFormAuthAttr]]>form</a>. Already <a id="btn-login" href="#">registered?</a></p> */}
                    <div className="login-form-container cf">
                        <LoginFormModal />
                    </div>
                </div>
            </section>

            {/* <section className="language-switcher cf">
                <div className="content-wrapper">
                    <form>
                        <div className="form-field switch-language">
                            [[!SelectLanguage]]
                        </div>
                    </form>
                </div>
            </section> */}
        </div>
    );
}

export default SplashPage;
