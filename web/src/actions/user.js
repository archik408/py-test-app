import axios from 'axios';

export const GET_USERS = 'GET_USERS';
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS';
export const GET_USERS_FAILURE = 'GET_USERS_FAILURE';
export const RESET_GET_USERS = 'RESET_GET_USERS';
export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const RESET_GET_USER = 'RESET_GET_USER';
export const SAVE_USER = 'SAVE_USER';
export const SAVE_USER_SUCCESS = 'SAVE_USER_SUCCESS';
export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE';
export const RESET_SAVE_USER = 'RESET_SAVE_USER';
export const REMOVE_USER = 'REMOVE_USER';
export const REMOVE_USER_SUCCESS = 'REMOVE_USER_SUCCESS';
export const REMOVE_USER_FAILURE = 'REMOVE_USER_FAILURE';
export const RESET_REMOVE_USER = 'RESET_REMOVE_USER';

const ROOT_URL = location.href.indexOf('localhost') > 0 ? 'http://localhost:8000/api' : '/api';

export function getUsers() {
    const request = axios.get(`${ROOT_URL}/users`);

    return {
        type: GET_USERS,
        payload: request
    };
}

export function getUsersSuccess(users) {
    return {
        type: GET_USERS_SUCCESS,
        payload: users
    };
}

export function getUsersFailure(error) {
    return {
        type: GET_USERS_FAILURE,
        payload: error
    };
}

export function resetGetUsers() {
    return {
        type: RESET_GET_USERS
    };
}

export function getUser(id) {
    const request = axios.get(`${ROOT_URL}/users/${id}`);

    return {
        type: GET_USER,
        payload: request
    };
}

export function getUserSuccess(user) {
    return {
        type: GET_USER_SUCCESS,
        payload: user
    };
}

export function getUserFailure(error) {
    return {
        type: GET_USER_FAILURE,
        payload: error
    };
}

export function resetGetUser() {
    return {
        type: RESET_GET_USER
    };
}

export function saveUser(id) {
    const request = axios.put(`${ROOT_URL}/users/${id}`);

    return {
        type: SAVE_USER,
        payload: request
    };
}

export function saveUserSuccess(user) {
    return {
        type: SAVE_USER_SUCCESS,
        payload: user
    };
}

export function saveUserFailure(error) {
    return {
        type: SAVE_USER_FAILURE,
        payload: error
    };
}

export function resetSaveUser() {
    return {
        type: RESET_SAVE_USER
    };
}

export function removeUser(id) {
    const request = axios.delete(`${ROOT_URL}/users/${id}`);

    return {
        type: REMOVE_USER,
        payload: request
    };
}

export function removeUserSuccess(user) {
    return {
        type: REMOVE_USER_SUCCESS,
        payload: user
    };
}

export function removeUserFailure(error) {
    return {
        type: REMOVE_USER_FAILURE,
        payload: error
    };
}

export function resetRemoveUser() {
    return {
        type: RESET_REMOVE_USER
    };
}