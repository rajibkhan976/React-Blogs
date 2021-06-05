import { apiClient } from './apiClient';

export function getPosts() {
    return apiClient.get(`/posts`);
}

export function getMyPosts() {
    return apiClient.get('/posts?userId=2');
}

export function updateMyPost(id, post) {
    return apiClient.put('/posts/' + id, post);
}

export function deleteMyPost(id) {
    return apiClient.delete('/posts/' + id);
}

export function addNewPost(post) {
    return apiClient.post(`/posts`, post);
}

export function getPostDetails(id) {
    return apiClient.get('/posts/' + id);
}

export function getCommentsByPostId(postId) {
    return apiClient.get('/comments?postId=' + postId);
}

export function getUsers() {
    return apiClient.get(`/users`);
}

export function getPostsByUserId(userId) {
    return apiClient.get('/posts?userId=' + userId);
}