/**
 * Action generating for updating the uploaded image's URI
 */

import {
  SET_USER_ID,
  SET_USER_NAME,
  USER_LOGIN_FAILURE,
  SET_USER_AUTHED,
} from './actionTypes';
import { firebaseAuth } from '../utils/firebase';

/**
 * Logs in the user given the email and password combination
 * @param {string } email
 * @param { string } password
 */
export const asyncUserLogin = (email, password) => dispatch => (
  firebaseAuth.signInWithEmailAndPassword(email, password)
    .then(() => {
      dispatch(setUserID(12345678));
      dispatch(setUserName('Stiven Isascrub'));
      dispatch(setUserAuthed(true));
      return Promise.resolve();
    })
    .catch(() => {
      dispatch(userLoginFailure('Login Failed'));
      return Promise.reject();
    })
);

/**
 * Creates a new user given the username, email, and password
 * @param {string} username
 * @param {string} email
 * @param {string} password
 */
export const createUser = (username, email, password) => dispatch => (
  firebaseAuth.createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User Created');
    })
    .catch((error) => {
      console.log(error);
      // TODO: handle error here
    })
);

/**
 * Login request failure
 */
const userLoginFailure = error => ({ type: USER_LOGIN_FAILURE, error });

/**
 * Sets the associated User ID
 * @param {int} id
 */
export const setUserID = id => (
  {
    type: SET_USER_ID,
    payload: id,
  }
);

/**
 * Sets the associated user's lexiconic name
 * @param {string} name
 */
export const setUserName = name => (
  {
    type: SET_USER_NAME,
    payload: name,
  }
);

/**
 * Updates whether the current user is authenticated and clear to proceed
 * @param {boolean} authed
 */
export const setUserAuthed = authed => (
  {
    type: SET_USER_AUTHED,
    payload: authed,
  }
);
