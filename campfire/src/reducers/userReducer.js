/**
 * Reducer for information about the user
 */
import {
  SET_USER_ID,
  SET_USER_NAME,
  SET_USER_AUTHED,
  USER_LOGIN_FAILURE,
} from '../actions/actionTypes';

const initialState = {
  authed: false,
};

/**
 * Reducer for the current user
 * @param {object} state
 * @param {object} action
 */
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_ID: {
      return ({ ...state, id: action.payload });
    }
    case SET_USER_NAME: {
      return ({ ...state, name: action.payload });
    }
    case SET_USER_AUTHED: {
      return ({ ...state, authed: action.payload });
    }
    case USER_LOGIN_FAILURE: {
      return ({ ...state, error: action.error });
    }
    default:
      return state;
  }
};

export default userReducer;
