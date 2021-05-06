import axios from 'axios';
export const baseURL = 'https://api.yourteeth.club';
export const testURL = 'http://localhost:8081';

export const currentUrl = testURL;

export const axiosInstance = axios.create({
    baseURL: testURL,
    withCredentials: false,
});
