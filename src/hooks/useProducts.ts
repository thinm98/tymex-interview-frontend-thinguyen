import { useQuery } from '@tanstack/react-query';
import { productsService } from '../services/products';

export const useProducts = () => {
    return useQuery({
        queryKey: ['products'],
        queryFn: productsService.getProducts,
    });
};

export const useProduct = (id: number) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => productsService.getProductById(id),
        enabled: !!id,
    });
}; 