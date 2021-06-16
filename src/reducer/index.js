import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import publicReducer from './publicReducer';

export default combineReducers({
    usersReducer,
    publicReducer
});