import { productsService } from '@/services/products';

const productQueries = {
    getListProducts: () => ({
        queryKey: ['products'],
        queryFn: productsService.getProducts,
    })
}

export default productQueries;
