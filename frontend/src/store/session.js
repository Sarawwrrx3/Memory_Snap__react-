// will use the POST /api/session backend route to login in a user as well as add the session user's information to the frontend Redux store.
// frontend/src/store/session.js
import { csrfFetch } from './csrf';

const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';

const setUser = (user) => {
  return {
    type: SET_USER,
    payload: user,
  };
};

const removeUser = () => {
  return {
    type: REMOVE_USER,
  };
};

export const login = (user) => async (dispatch) => {
  const { credential, password } = user;
  const response = await csrfFetch('/api/session', {
    method: 'POST',
    body: JSON.stringify({
      credential,
      password,
    }),
  });
  const data = await response.json();
  // const newObject = {};
  // newObject.user = data.userAndAlbum
  dispatch(setUser(data.user));
  return response;
};

const initialState = { user: null };

const sessionReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case SET_USER:
      newState = Object.assign({}, state);
      newState.user = action.payload;
      return newState;
    case REMOVE_USER:
      newState = Object.assign({}, state);
      newState.user = null;
      return newState;
    default:
      return state;
  }
};

// export const demoLogin = () => async (dispatch) => {

//     const response = await csrfFetch("/api/session", {
//         method: "POST",
//         body: JSON.stringify({
//             credential: "Demo-lition",
//             password: "password",
//             myAlbum: 1
//         }),
//     });
//     const data = await response.json();
//     const newObject = {};
//     newObject.user = data.userAndAlbum
//     dispatch(setUser(newObject.user))
//     return response;
// }


// Restore the Session User ----- GET /api/session
export const restoreUser = () => async dispatch => {
  const response = await csrfFetch('/api/session');
  const data = await response.json();
  // const newObject = {};
  // newObject.user = data.userAndAlbum
  dispatch(setUser(data.user));
  return response;
};

// Signup Action ----- POST /api/users
export const signup = (user) => async (dispatch) => {
  const { username, email, password } = user;
  const response = await csrfFetch("/api/users", {
    method: "POST",
    body: JSON.stringify({
      username,
      email,
      password,
    }),
  });
  const data = await response.json();
  // const newObject = {}
  // newObject.user = data.userAndAlbum
  dispatch(setUser(data.user));
  return response;
};


// Log Out Action / logout ----- DELETE /api/session
export const logout = () => async (dispatch) => {
  const response = await csrfFetch('/api/session', {
    method: 'DELETE',
  });
  dispatch(removeUser());
  return response;
};






export default sessionReducer;