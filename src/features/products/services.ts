import { api } from '../../services/api';
import { IProduct } from '@/types';



export const productsService = {
    getProducts: async (): Promise<IProduct[]> => {
        const response = await api.get<IProduct[]>('/products');
        return response.data;
    },

    getProductById: async (id: number): Promise<IProduct> => {
        const response = await api.get<IProduct>(`/products/${id}`);
        return response.data;
    },
}; 