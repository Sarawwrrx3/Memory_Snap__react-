import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import LoginFormModal from "../LoginFormModal";
import "./splashpage.css";

function SplashPage() {
    return (
        <div class="page-wrapper">
            <section class="header-logo">
                <div class="content-wrapper">
                    <div class="logo">
                        <img
                            src="./image/photo-album-pictures-photography2.jpeg"
                            alt="landing-main-pic"
                        />
                    </div>
                </div>
            </section>

            <section class="login-form">
                <div class="content-wrapper">
                    <p>Login to our WiFi with Social Media</p>
                    <div class="social-login-buttons cf">
                        <a href="facebook.com">
                            <img
                                src="./image/facebook-btn.png"
                                alt="facebook-icon-btn"
                            />
                        </a>
                        <a href="twitter.com">
                            <img
                                src="./image/twitter-btn.png"
                                alt="twitter-icon-btn"
                            />
                        </a>
                        <a href="instagram.com">
                            <img
                                src="./image/instagram-btn.png"
                                alt="instagram-icon-btn"
                            />
                        </a>
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
