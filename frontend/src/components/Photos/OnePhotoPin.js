import React from 'react'
import "./photo.css";

function OnePhotoPin(props) {
    return (
        
        // <div>
        //     <input onChange={event => upload_img(event, setPinImage)} type="file" name="picture" id="picture" value="" />

        //     <div className="card">
        <div className={`card card_${props.pinDetails.pin_size}`}>
            <div className="pin_title">{props.pinDetails.title}</div>

            <div className="pin_modal">
                <div className="modal_head">
                    <div className="save_card">Save</div>
                </div>

                <div className="modal_foot">
                    <div className="destination">
                        <div className="pint_mock_icon_container">
                            <img src="./images/upper-right-arrow.png" alt="destination" className="pint_mock_icon" />
                        </div>
                        <span>{props.pinDetails.destination}</span>
                    </div>

                    <div className="pint_mock_icon_container">
                        <img src="./images/send.png" alt="send" className="pint_mock_icon" />
                    </div>

                    <div className="pint_mock_icon_container">
                        <img src="./images/ellipse.png" alt="edit" className="pint_mock_icon" />
                    </div>
                </div>
            </div>

            <div className="pin_image">
                {/* <img onLoad={check_size} src={props.pinDetails.img_blob} alt="pin_image" /> */}
            </div>
        </div>
        // </div>
    )
}

// const styles = { small: {},medium:{}, large:{}}

export default OnePhotoPin;


// <div className="one-photo-container" style={{...styles.pin}}> </div>