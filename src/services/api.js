import axios from "axios";

export const api = axios.create({
    baseURL: 'https://deply.fabiano-development.tech/',
    headers: { 
        'Content-Type': 'application/pdf', 
        'Accept': 'application/pdf', 
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        }
        
})