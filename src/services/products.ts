import { api } from './api';

export interface Author {
    firstName: string;
    lastName: string;
    email: string;
    gender: string;
    avatar: string;
    onlineStatus: 'online' | 'offline' | 'idle' | 'busy';
}

export interface Product {
    id: number;
    title: string;
    category: string;
    price: number;
    isFavorite: boolean;
    createdAt: number;
    theme: string;
    tier: string;
    imageId: number;
    author: Author;
}

export const productsService = {
    getProducts: async (): Promise<Product[]> => {
        const response = await api.get<Product[]>('/products');
        return response.data;
    },

    getProductById: async (id: number): Promise<Product> => {
        const response = await api.get<Product>(`/products/${id}`);
        return response.data;
    },
}; 