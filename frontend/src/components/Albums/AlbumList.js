import React from 'react'

function AlbumList() {
    return (
        <div>
            <section class="sample-content">
                <h2>Load from album</h2>
                <p class="subhead mdl-color-text--grey-700">
                    Load photos into your photo frame from your Photos
                    albums.
                </p>
                <ul class="mdl-list" id="albums"></ul>
            </section>
        </div>
    );
}

export default AlbumList
