
import React, { useState, useRef } from "react";


function ImageUpload () {
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

