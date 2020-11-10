import { axiosInstance } from './axiosConfig';

export const getPosts = () => async () => {
    const response = (await fetch("https://jsonplaceholder.typicode.com/posts")).json
    return response;
}
