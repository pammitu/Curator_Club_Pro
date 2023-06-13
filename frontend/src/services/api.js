import axios from 'axios';

const API_URL = 'https://curator-club-pro.herokuapp.com'; 

export async function registerUser(userData) {
    const response = await axios.post(`${API_URL}/user/register`, userData);
    return response.data;
}

export async function loginUser(userData) {
    const response = await axios.post(`${API_URL}/user/login`, userData);
    return response.data;
}

export async function getArtworkCollection(username) {
    const response = await axios.get(`${API_URL}/user/${username}/collection`);
    return response.data;
}

export async function getFavorites(username) {
    const response = await axios.get(`${API_URL}/user/${username}/favorites`);
    return response.data;
}

export async function searchArtworkMet(query){
    const response = await axios.get(`${API_URL}/artworks/search/met`, {
        params: {
            q: query
        }
    });
    return response.data;
}


export async function addToCollection(username, artworkId) {
    const response = await axios.put(`${API_URL}/artworks/${username}/collection/add`, { artworkId: artworkId });
    return response.data;
}