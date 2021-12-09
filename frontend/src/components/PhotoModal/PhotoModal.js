import React from "react";
import { useState } from "react";

import "./photoModal.css";

function PhotoModal() {
    const [pinDetails, setPinDetails] = useState({
        author: "",
        board: "",
        title: "",
        description: "",
        destination: "",
        img_blob: "",
        pin_size: "",
    });
    const [showLabel, setShowLabel] = useState(true);
    const [showModalPin, setShowModalPin] = useState(false);

    return (
        <div className="add_pin_modal">
            <div className="add_pin_container">
                <div className="side" id="left_side">
                    <div className="section1">
                        <div className="pint_mock_icon_container">
                            <img
                                src="./images/ellipse.png"
                                alt="edit"
                                className="pint_mock_icon"
                            />
                        </div>
                    </div>

                    <div className="section2">
                        <label
                            htmlFor="upload_img"
                            id="upload_img_label"
                            style={{
                                display: showLabel ? "block" : "none",
                            }}
                        >
                            <div className="upload_img_container">
                                <div id="dotted_border">
                                    <div className="pint_mock_icon_container">
                                        <img
                                            src="./images/up-arrow.png"
                                            alt="upload_img"
                                            className="pint_mock_icon"
                                        />
                                    </div>
                                    <div>Click to upload</div>
                                    <div>
                                        Recommendation: Use high-quality .jpg
                                        less than 20MB
                                    </div>
                                </div>
                            </div>

                            <input
                                // onChange={(event) =>
                                //     upload_img(
                                //         event,
                                //         pinDetails,
                                //         setPinDetails,
                                //         setShowLabel,
                                //         setShowModalPin
                                //     )
                                // }
                                type="file"
                                name="upload_img"
                                id="upload_img"
                                value=""
                            />
                        </label>

                        <div
                            className="modals_pin"
                            style={{
                                display: showModalPin ? "block" : "none",
                            }}
                        >
                            <div className="pin_image">
                                <img
                                    // onLoad={check_size}
                                    src={pinDetails.img_blob}
                                    alt="pin_image"
                                />
                            </div>
                        </div>
                    </div>

                    {/* <div className="section3">
                        <div className="save_from_site">Save from site</div>
                    </div> */}
                </div>

                <div className="side" id="right_side">
                    <div className="section1">
                        <div className="select_size">
                            <select
                                defaultValue="Select"
                                name="pin_size"
                                id="pin_size"
                            >
                                <option value="">Select</option>
                                <option value="small">small</option>
                                <option value="medium">medium</option>
                                <option value="large">large</option>
                            </select>
                            <div
                                // onClick={() =>
                                //     save_pin(pinDetails, props.add_pin)
                                // }
                                className="save_pin"
                            >
                                Save
                            </div>
                        </div>
                    </div>

                    <div className="section2">
                        <input
                            placeholder="Add your title"
                            type="text"
                            className="new_pin_input"
                            id="pin_title"
                        />
                        <input
                            placeholder="Tell everyone what your Pin is about"
                            type="text"
                            className="new_pin_input"
                            id="pin_description"
                        />
                        {/* <input
                            placeholder="Add a destination link"
                            type="text"
                            className="new_pin_input"
                            id="pin_destination"
                        /> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PhotoModal;

//! uploads ONE photo 

// "right-side" ---- Section 1 ----- this will be to choose album  
