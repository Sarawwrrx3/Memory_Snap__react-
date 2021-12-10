import React, { useState, useRef } from "react";

function ImageUpload() {
    const fileInputField = useRef(null);

    const [files, setFiles] = useState({});

    return (
        <div>
            <h3> You can upload many photos</h3>
            <input type="file" ref={fileInputField} />
        </div>
    );
}

export default ImageUpload;

// photos/upload/
// uploading many photos.

//! if i have to upload many photos, don't i have to add  title and content for each?
//! maybe upload 5-10 at a time? with an input field?
// or... make the title and content ------ optional?


//! MAY NOT USE ANY OF THESE FILES. it will used in AddPhotoModal...  