import baseApi from './config';
import { User, Login } from '../../@types';

export const createUser = async (user: Omit<User, 'id' | 'confirmaSenha'>) => {
    try{
        const response = await baseApi.post('/users', user)
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}

export const renderUsers = async () => {
    try {
        const response = await baseApi.get("/users")
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}

export const loginUser = async (payload: Login) => {
    try {
        const response = await baseApi.post("/login", payload);
        return response.data; 
    } catch (error: any) {
        alert (`Error: ${error.response.data}`)
    }
}