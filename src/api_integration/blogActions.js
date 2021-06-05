import * as Api from './blogApi';

export function getPosts() {
    return function(dispatch) {
        return Api.getPosts()
        .then((result) => {
            return dispatch({
                type: 'GET_ALL_POSTS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_ALL_POSTS_FAILED',
                data: 'Fetching all posts failed due to' + error
            });
        })
    }
}

export function getMyPosts() {
    return function(dispatch) {
        return Api.getMyPosts()
        .then((result) => {
            return dispatch({
                type: 'GET_MY_POSTS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_MY_POSTS_FAILED',
                data: 'Fetching my posts failed due to' + error
            });
        })
    }
}

export function updateMyPost(id, post) {
    return function(dispatch) {
        return Api.updateMyPost(id, post)
        .then((result) => {
            return dispatch({
                type: 'UPDATE_MY_POST',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'UPDATE_MY_POST_FAILED',
                data: 'Updating my post failed due to' + error
            });
        })
    }
}

export function deleteMyPost(id) {
    return function(dispatch) {
        return Api.deleteMyPost(id)
        .then((result) => {
            return dispatch({
                type: 'DELETE_MY_POST',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'DELETE_MY_POST_FAILED',
                data: 'Deleting my post failed due to' + error
            });
        })
    }
}

export function addPost(post) {
    return function(dispatch) {
        return Api.addNewPost(post)
        .then((result) => {
            return dispatch({
                type: 'ADD_NEW_POST',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'ADD_NEW_POST_FAILED',
                data: 'Adding new post failed due to' + error
            });
        })
    }
}

export function getPostDetails() {
    return function(dispatch) {
        return Api.getPostDetails()
        .then((result) => {
            return dispatch({
                type: 'GET_POST_DETAILS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_POST_DETAILS_FAILED',
                data: 'Fetching post details failed due to' + error
            });
        })
    }
}

export function getCommentsByPostId(postId) {
    return function(dispatch) {
        return Api.getCommentsByPostId(postId)
        .then((result) => {
            return dispatch({
                type: 'GET_COMMENTS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_COMMENTS_FAILED',
                data: 'Fetching comments failed due to' + error
            });
        })
    }
}

export function getUsers() {
    return function(dispatch) {
        return Api.getUsers()
        .then((result) => {
            return dispatch({
                type: 'GET_USERS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_USERS_FAILED',
                data: 'Fetching users failed due to' + error
            });
        })
    }
}

export function getPostsByUserId(userId) {
    return function(dispatch) {
        return Api.getPostsByUserId(userId)
        .then((result) => {
            return dispatch({
                type: 'GET_USERS_POSTS',
                data: result.data
            });
        })
        .catch((error) => {
            return dispatch({
                type: 'GET_USERS_POSTS_FAILED',
                data: "Fetching user's posts failed due to" + error
            });
        })
    }
}