import baseUrl from './config';
import { User } from '../../@types';

export const createUser = async (user: Omit<User, 'id'>) => {
    try{
        const response = await baseUrl.post('/users', user)
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}