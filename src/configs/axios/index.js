import axios from 'axios';
// import errorHandler from './errorHandler'

const API = axios.create({
    baseURL: `http://localhost:4000`
});

// apiGateway.interceptors.response.use((response) => response.data, errorHandler);

// export { default as set } from "./setAuthorizationHeader"
export default API;

export const login = async (data) => {
    const response = await API.post('/users/login', data);
    console.log("response:", response);
    return response.data;
}