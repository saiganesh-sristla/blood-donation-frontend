import axios from "axios";
const BASE_URL = "https://blood-donation-backend-ludp.onrender.com/api/v1";

export const publicRequest = axios.create({
    baseURL: BASE_URL
})

export const userRequest = axios.create({
    
    baseURL: BASE_URL
})