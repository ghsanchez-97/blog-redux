import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import publicReducer from './publicReducer';
import tareasReducer from './tareasReducer';

export default combineReducers({
    usersReducer,
    publicReducer,
    tareasReducer
});