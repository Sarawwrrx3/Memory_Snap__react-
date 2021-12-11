import { csrfFetch } from "./csrf";

export const ADD_MORE_PHOTOS = "photos/ADD_MORE_PHOTOS";
export const ADD_ONE_PHOTO = "photos/ADD_ONE_PHOTO";
export const EDIT_PHOTO = "photos/EDIT_PHOTO";
export const LOAD_MORE_PHOTOS = "photos/LOAD_PHOTOS";
export const LOAD_ONE_PHOTO = "photos/LOAD_ONE_PHOTO";
export const REMOVE_PHOTO = "photos/REMOVE_PHOTO";
export const GET_ALL_PHOTOS = "photos/GET_ALL_PHOTOS";
// action creator

// add more than one photo option?
const addMorePhotos = (photo) => {
    return {
        type: ADD_MORE_PHOTOS,
        photo,
    };
};

// this action object for adding a photo
const add = (newPhoto) => {
    return {
        type: ADD_ONE_PHOTO,
        newPhoto,
    };
};

const edit = (photo) => {
    return {
        type: EDIT_PHOTO,
        photo,
    };
};

const getAllPhotos = (photos) => ({
    type: GET_ALL_PHOTOS,
    photos, // payload
});

const load = (photos) => ({
    type: LOAD_MORE_PHOTOS,
    photos,
});

const loadOnePhoto = (photo) => ({
    type: LOAD_ONE_PHOTO,
    photo,
});

const remove = (photo) => ({
    type: REMOVE_PHOTO,
    photo,
});

// add / create/ import photos
export const addManyPhotos = () => async (dispatch) => {
    const response = await csrfFetch("/api/photos");
    if (response.ok) {
        const photo = await response.json();
        dispatch(addMorePhotos(photo));
        return photo;
    }
};

// this is a thunk to add photo
export const addPhoto = (photo) => async (dispatch) => {
    const response = await csrfFetch(`/api/photos`, {
        method: "POST",
        body: JSON.stringify(photo),
    });
    if (response.ok) {
        const newPhoto = await response.json();
        // console.log("This is new photo in Thunk", newPhoto);
        dispatch(add(newPhoto));
        return newPhoto;
    }
};

//  edit / update
// `/api/photos/${photo.id}`
export const editPhoto = (post, photoID) => async (dispatch) => {
    const { albumID, userID, title, description } = post;
    // console.log("freedman", post);
    console.log("id postttt ", post); // id
    // console.log("what is payload", payload); // undefined
    const response = await csrfFetch(`/api/photos/${photoID}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
    });
    console.log("green dragon", response);

    if (response.ok) {
        const photo = await response.json();
        console.log("photoooooo", photo);
        dispatch(edit(photo));
        return photo;
    }
};

//  edit / update
// `/api/photos/${photo.id}`
// export const editPhoto = (post, photoID) => async (dispatch) => {
//     const { albumID, userID, title, description } = post;
//     console.log("freedman", post);
//     const response = await csrfFetch(`/api/photos/${photoID}`, {
//         method: "PUT",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//             albumID,
//             userID,
//             title,
//             description,
//             photoID,
//         }),
//     });

//     if (response.ok) {
//         const photo = await response.json();
//         dispatch(edit(photo));
//         return photo;
//     }
// };

export const getAllThePhotos = () => async (dispatch) => {
    const response = await fetch(`/api/photos`);

    if (response.ok) {
        const photos = await response.json();
        dispatch(getAllPhotos(photos));
        return photos;
    }
};

// get more than one
export const getPhotos = () => async (dispatch) => {
    const response = await fetch(`/api/photos`);

    if (response.ok) {
        const photos = await response.json();
        dispatch(load(photos));
        return photos;
    }
};

// get ONE photo
export const getOnePhoto = (photoID) => async (dispatch) => {
    const response = await fetch(`/api/photos/${photoID}`);

    if (response.ok) {
        const photo = await response.json();
        // console.log(photos, '<------getPhotos photos')
        dispatch(loadOnePhoto(photo));
        return photo;
    }
};

// delete / remove
export const removePhoto = (photoID) => async (dispatch) => {
    console.log("photoReducer (delete)", photoID);
    const response = await csrfFetch(`/api/photos/${photoID}`, {
        method: "DELETE",
        body: JSON.stringify({}),
    });
    if (response.ok) {
        const photo = await response.json();
        dispatch(remove(photo));
        // console.log("this is delete route", response);
        // dispatch(remove(photoID));
        return photo;
    }
};

const initialState = {};

// Reducer --- changes data in my store
const photosReducer = (state = initialState, action) => {
    let newState; // or....  let newState = {};
    switch (action.type) {
        case ADD_MORE_PHOTOS:
            action.photo.forEach((photo) => (newState[photo.id] = photo));
            return newState;

        case ADD_ONE_PHOTO:
            if (!state[action.newPhoto.id]) {
                newState = { ...state, [action.newPhoto.id]: action.newPhoto };
            }
            return newState;

        case EDIT_PHOTO:
            // console.log("AAAAAACTION", action);
            newState = { ...state };
            // console.log("newwww stateee", newState);
            newState[action.photo.photo.id] = action.photo.photo;
            return newState;

        case GET_ALL_PHOTOS: {
            // let photoObj = Object.assign({}, action.photos)
            const newState = {};
            action.photos.forEach((photo) => {
                // newState[photo.id] = action.photo;
                newState[photo.id] = photo;
            });
            return newState;
        }

        case LOAD_MORE_PHOTOS: {
            newState = { ...state };
            // console.log("fsdfaf--- ", action.photos);
            action.photos?.forEach((photo) => {
                newState[action.photos.id] = action.photos;
            });
            return newState;
        }

        case LOAD_ONE_PHOTO:
            newState = { ...state };
            newState[action.photo.id] = action.photo;
            return newState;

        case REMOVE_PHOTO: {
            newState = { ...state };
            // console.log("tree lover", action.photo);
            delete newState[+action.photo.photoID]; // from res.json({photoID})
            // photoID ---- key inside action.photo.
            // action.photo is the object we sent in

            return newState;
        }

        default:
            return state;
    }
};

export default photosReducer;

//? Note ------ used pokedex for reference
