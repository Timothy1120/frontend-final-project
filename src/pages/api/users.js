import apiGateway from '../../configs/axios'

//endpoint login
export const login = async (data) => {
    const response = await apiGateway.post('/users/login', data);
    console.log(response);
    return response.data;
}

