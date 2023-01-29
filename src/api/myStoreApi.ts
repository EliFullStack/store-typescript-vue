import axios, { AxiosHeaders } from "axios";

const myStoreApi = axios.create({
    baseURL: 'https://api.escuelajs.co/api/v1'
})

myStoreApi.interceptors.request.use((config) => {
    const token = localStorage.getItem('token') ?? '';
    if(token) {
      (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`);//JWT
    } 
    return config
})

export default myStoreApi;