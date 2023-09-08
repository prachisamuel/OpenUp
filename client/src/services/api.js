import axios from 'axios';
const URL= 'http://localhost:8000';

export const addLike = async (user) => {
    try {
        return await axios.post(`${URL}/posts-like`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}

export const authenticateSignup = async (user) => {
    try {
        return await axios.post(`${URL}/signup`, user)
    } catch (error) {
        console.log('Error while calling like API: ', error);
        return error.response;
    }
}
export const authenticateLogin = async (user) => {
    try {
        return await axios.post(`${URL}/login`, user)
    } catch (error) {
        console.log('Error while calling login API: ', error);
    }
}