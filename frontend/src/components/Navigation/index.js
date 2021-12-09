// frontend/src/components/Navigation/index.js
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import ProfileButton from "./ProfileButton";
import LoginFormModal from "../LoginFormModal";

import photoIcon from "./photo-camera-icon2.png";
// import ImageSearchIcon from "@mui/icons-material/ImageSearch";
// import { IconButton } from "@material-ui/core";

import "./Navigation.css";

function Navigation({ isLoaded }) {
    const [input, setInput] = useState("");
    const sessionUser = useSelector((state) => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = <ProfileButton user={sessionUser} />;
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink className="signup-nav-button" to="/signup">
                    Sign Up
                </NavLink>
            </>
        );
    }

    const onSearchSubmit = (e) => {
        e.preventDefault();

        console.log("You have clicked on Search button!");
        // if (input) {
        //     props.onSubmit(input);
        //     db.collection("terms").add({
        //         term: input,
        //     });
        // }
    };

    return (
        <div className="Nav-main-container">
            {/* <link rel="icon" type="image/png" href="./photo-camera-icon2.png" />*/}
            <a href="/home">
                <img src={photoIcon} alt="photo-camera-icon" />
            </a>

            <li className="nav-li-index-container">
                <NavLink className="home-navlink" exact to="/home">
                    Memory Snap
                </NavLink>
                {isLoaded && sessionLinks}
            </li>

            {/* <div className="header__button following">
              <a href="/">Following</a>
          </div> */}

            {/* <div className="header__search">
              <div className="header__searchContainer"> */}
            {/* <ImageSearchIcon /> */}
            {/* <form>
                      <input
                          type="text"
                          onChange={(e) => setInput(e.target.value)}
                      />
                      <button type="submit" onClick={onSearchSubmit}>
                          Submit
                      </button>
                  </form>
              </div>
          </div> */}

            <Link className="link-profile" to="/home">
                <button className="go-to-profile-btn">Profile</button>
            </Link>
        </div>
    );
}

export default Navigation;

// use ICON instead of "Memory map"
// change ProfileButton
// add image to LINK to image ? material UI?
// change LINK to user's profile page
