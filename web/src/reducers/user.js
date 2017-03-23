import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    RESET_GET_USERS,
    GET_USER,
    GET_USER_SUCCESS,
    GET_USER_FAILURE,
    RESET_GET_USER,
    SAVE_USER,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    RESET_SAVE_USER,
    REMOVE_USER,
    REMOVE_USER_SUCCESS,
    REMOVE_USER_FAILURE,
    RESET_REMOVE_USER
} from '../actions/user';


const INITIAL_STATE = {
    userList: {users: [], error: null, loading: false},
    user: {user: null, error: null, loading: false},
    saveUser: {user: null, error: null, loading: false},
    deletedUser: {user: null, error: null, loading: false}
};


export default function (state = INITIAL_STATE, action) {
    let error;
    switch (action.type) {
        case GET_USERS:
            return {userList: {users: [], error: null, loading: true}};
        case GET_USERS_SUCCESS:
            return {userList: {users: action.payload.data, error: null, loading: false}};
        case GET_USERS_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return {userList: {users: [], error: error, loading: false}};
        case RESET_GET_USERS:
            return {userList: {user: [], error: null, loading: false}};

        case GET_USER:
            return {user: {user: null, error: null, loading: true}};
        case GET_USER_SUCCESS:
            return {user: {user: action.payload.data, error: null, loading: false}};
        case GET_USER_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return {user: {user: null, error: error, loading: false}};
        case RESET_GET_USER:
            return {user: {user: null, error: null, loading: false}};

        case SAVE_USER:
            return {saveUser: {user: null, error: null, loading: true}};
        case SAVE_USER_SUCCESS:
            return {saveUser: {user: action.payload.data, error: null, loading: false}};
        case SAVE_USER_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return {saveUser: {user: null, error: error, loading: false}};
        case RESET_SAVE_USER:
            return {saveUser: {user: null, error: null, loading: false}};

        case REMOVE_USER:
            return {deletedUser: {user: null, error: null, loading: true}};
        case REMOVE_USER_SUCCESS:
            return {deletedUser: {user: action.payload.data, error: null, loading: false}};
        case REMOVE_USER_FAILURE:
            error = action.payload.data || {message: action.payload.message};
            return {deletedUser: {user: null, error: error, loading: false}};
        case RESET_REMOVE_USER:
            return {deletedUser: {user: null, error: null, loading: false}};

        default:
            return state;
    }
}
