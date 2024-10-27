import axios, { Axios } from "axios";


export const blogFecth = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
})

