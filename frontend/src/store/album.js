// import { useSelector } from "react-redux";
import { csrfFetch } from "./csrf";


const CREATE_ALBUM = "albums/CREATE_ALBUM";
const EDIT_ALBUM = "albums/EDIT_ALBUM";
const LOAD_ALBUMS = "albums/LOAD_ALBUMS";
const LOAD_ONE_ALBUM = "albums/LOAD_ONE_ALBUM";
const REMOVE_ALBUM = "albums/REMOVE_ALBUM";

export const add = (newAlbum) => ({
    type: CREATE_ALBUM,
    newAlbum,
});


const edit = (album) => ({
    type: EDIT_ALBUM,
    album,
});


const loadAlbums = (album) => ({
    type: LOAD_ALBUMS,
    album,
});

const loadOneAlbum = (album) => ({
    type: LOAD_ONE_ALBUM,
    album,
});

const remove = (album) => ({
    type: REMOVE_ALBUM,
    album,
});



// add new album
export const addNewAlbum = (album) => async (dispatch) => {
    // const payload = useSelector((state) => state.payload || initialState);
    // const { title, userID } = album;

    // const data = {
    //     albumTitle: title,
    //     userID,
    // };
    // different from addPhoto

    const res = await csrfFetch(`/api/albums`, {
        method: "POST",
        body: JSON.stringify(album),
    });

    if (res.ok) {
        const newAlbum = await res.json();
        dispatch(add(newAlbum));
        return newAlbum;
    }
};


//  edit / update
export const editAlbum = (album) => async (dispatch) => {
    const response = await fetch(`/api/albums/${album.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(album),
    });

    if (response.ok) {
        const album = await response.json();
        dispatch(edit(album));
        return album;
    }
};


// get more than one / get many 
export const getAlbums = (user) => async (dispatch) => {
    const res = await fetch(`/api/users/${user.id}/albums`);
        // const res = await fetch(`/api/albums`);

    // console.log(res, "<----res");

    if (res.ok) {
        const albums = await res.json();
        console.log(albums.albums, "<------getAlbums albums");
        dispatch(loadAlbums(albums.albums));
        return albums;
    }
};

// console.log("HELLO");
// get ONE album
export const getOneAlbum = (albumID) => async (dispatch) => {
    // console.log("tree lover ");
    const res = await fetch(`/api/albums/${albumID}`);
    // console.log("2");
    if (res.ok) {
        const album = await res.json();
        dispatch(loadOneAlbum(album));
        return album;
    }
};

// delete  album / remove Album
export const removeAlbum = (albumID) => async (dispatch) => {
    const response = await fetch(`/api/albums/${albumID}`, {
        method: "DELETE",
    });

    if (response.ok) {
        const album = await response.json();
        dispatch(remove(album.id));
        return album;
    }
};



const initialState = {};

const albumReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case CREATE_ALBUM:
            console.log("AAAAAACTION", action);
            if (!state[action.newAlbum.id]) {
                newState = { ...state, [action.newAlbum.id]: action.newAlbum };
            }
            return newState;
            // newState = {};
            // action.albums.forEach((album) => {
            //     newState[album.id] = album;
            // });
            // return newState;

        case EDIT_ALBUM:
            if (!state[action.album.id]) {
                newState = { ...state, [action.album.id]: action.album };
                return newState;
            } else {
                return {
                    ...state,
                    [action.album.id]: {
                        ...state[action.album.id],
                        ...action.album,
                    },
                };
            }

        case LOAD_ALBUMS: {
            const loadState = action.album;
            console.log("BEFORE newStatee", loadState);
            console.log("fsdfaf--- ", action);
            
            
            // action.album.forEach((album) => {
            //     console.log("Grreg", album);
            //     // "albums" is from ------  const albums = await res.json();
            //     loadState[album.id] = action.album;
            // });
            console.log("AFTER newStatee", loadState);
            return loadState;
        }

        case LOAD_ONE_ALBUM:
            newState = { ...state };
            newState[action.album.id] = action.album;
            return newState;

        case REMOVE_ALBUM: {
            newState = { ...state };
            console.log("wha is action.albumID", action.albumID);
            delete newState[action.album.albumID];
            return newState;
        }
        default:
            return state;
            // return initialState;
    }
};


export default albumReducer;
