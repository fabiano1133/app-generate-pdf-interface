import axios from "axios";

export const api = axios.create({
    baseURL: 'https://deply.fabiano-development.tech/'
})