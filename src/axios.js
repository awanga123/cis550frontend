import axios from 'axios';
export const baseURL = 'https://stormy-wildwood-02482.herokuapp.com';
export const testURL = 'http://localhost:8081';

export const currentUrl = baseURL;

export const axiosInstance = axios.create({
    baseURL: currentUrl,
    withCredentials: false,
});
