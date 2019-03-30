/**
 * Root Reducer
 * Imported in configureStore.js
 */

import { combineReducers } from 'redux';
import userReducer from './userReducer';

// primary root reducer
const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
