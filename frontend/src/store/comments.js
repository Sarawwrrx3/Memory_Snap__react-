import { csrfFetch } from "./csrf";

const ADD_COMMENT = "comments/ADD_COMMENT"
const GET_ALL_COMMENTS = "comments/GET_ALL_COMMENTS";
const DELETE_COMMENT = "comments/DELETE_COMMENT";


const addComment = (comment) => {
    return {
        type: ADD_COMMENT,
        comment,
    };
}

const setComments = (comments) => {
    return {
        type: GET_ALL_COMMENTS,
        comments,
    };
};

const removeComment = (commentId) => {
    return {
        type: DELETE_COMMENT,
        payload: commentId,
    };
};

export const addOneComment = (comment) => async (dispatch) => {
    const response = await csrfFetch("/api/photos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(comment),
    });
    const newComment = await response.json();
    dispatch(addComment(newComment));

    return newComment;
};

export const getComments = (id) => async (dispatch) => {
    const response = await fetch(`/api/photos/${id}`);
    const comments = await response.json();
    dispatch(setComments(comments));
};


export const deleteComment = (commentId) => async (dispatch) => {
    const response = await csrfFetch("/api/photos", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ commentId }),
    });

    dispatch(removeComment(commentId));
    return response;
};





const initialState = { comments: null };

const commentReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case GET_ALL_COMMENTS:
            newState = Object.assign({}, state);
            newState.comments = action.comments;
            return newState;
        case DELETE_COMMENT:
            newState = Object.assign({}, state);
            let index;
            newState.comments.comments.forEach((obj, i) => {
                if (obj.id === action.payload) {
                    index = i;
                }
            });
            newState.comments.comments.splice(index, 1);
            return newState;

        default:
            return state;
    }
};

export default commentReducer;
