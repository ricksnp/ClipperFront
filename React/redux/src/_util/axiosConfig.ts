import Axios from "axios";
/**
 * This is the configuration for axios, there are tons
 * more configurations that you can give, there are
 * also defaults you can give outside of this create
 * function and when you call the instance's methods,
 * these properties can be overridden.
 */
export const axiosInstance = Axios.create({
    // baseURL: "https://jsonplaceholder.typicode.com",
    // baseURL: "http://18.221.213.132:8081/Clipper",
    baseURL: "http://localhost:8080/Clipper/",
});