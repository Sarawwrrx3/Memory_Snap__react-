import React from "react";
// import { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import Navigation from "../Navigation";
import "./splashpage.css";
import facebookIcon from "./images/social-media-facebook_icon.png";
import twitterIcon from "./images/social-media-twitter_icon.png";
import instagramIcon from "./images/social-media-instagram-icon.png";

function SplashPage() {
    return (
        <div class="page-wrapper">
            <section class="header-logo">
                <div class="content-wrapper">
                    <div class="logo">
                        <img
                            src={facebookIcon}
                            alt="landing-main-pic"
                            className="social-icons"
                        />
                    </div>
                </div>
            </section>

            <section class="login-form">
                <div class="content-wrapper">
                    <p>Login to our WiFi with Social Media</p>
                    <div class="social-login-buttons cf">
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
                    <div class="login-form-container cf">
                        <LoginFormModal />
                    </div>
                </div>
            </section>

            {/* <section class="language-switcher cf">
                <div class="content-wrapper">
                    <form>
                        <div class="form-field switch-language">
                            [[!SelectLanguage]]
                        </div>
                    </form>
                </div>
            </section> */}
        </div>
    );
}

export default SplashPage;
