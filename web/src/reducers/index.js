import { combineReducers } from 'redux';
import user from './user';
import group from './group';

export const rootReducer = combineReducers({
    user
});