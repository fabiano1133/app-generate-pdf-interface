import axios from "axios";

export const api = axios.create({
    baseURL: 'http://54.196.153.35',
    headers: { 
        'Content-Type': 'application/pdf', 
        'Accept': 'application/pdf', 
        'Access-Control-Allow-Origin': '*', 
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS', 
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
        }
        
})