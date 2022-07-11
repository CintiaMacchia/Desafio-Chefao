import baseApi from './config';
import { Categorias } from '../../@types';

export const renderCategorias = async () => {
    try {
        const response = await baseApi.get("/categorias")
        return response.data;
    } catch(error: any) {
        alert(`Error: ${error.response.data}`)
    }
}