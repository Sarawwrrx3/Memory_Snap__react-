import React from "react";

function ProfilePage() {
    return (
        <div>
            <div className="header-wrapper">
                <nav className="Header_MainNav">
                    <ul className="HorizontalList">
                        <li className="HorizontalList__Item">
                            <a href="/" className="Heading">
                                Overview
                                <span className="Header_LinkSpacer">
                                    "Overview" ::after
                                </span>
                            </a>
                        </li>

                        <li className="HorizontalList__Item">
                            <a href="/albums" className="Heading">
                                Albums
                                <span className="Header_LinkSpacer">
                                    "Albums" ::after
                                </span>
                            </a>
                        </li>

                        <li className="HorizontalList__Item">
                            <a href="/photos" className="Heading">
                                Photos
                                <span className="Header_LinkSpacer">
                                    "Photos" ::after
                                </span>
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default ProfilePage;

// TODO: user's images and Albums
// first LIst ------ be home?
// change <a></a> tag to components?
// inspiration : see note
