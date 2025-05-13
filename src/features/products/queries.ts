import { productsService } from '@/services/products';
import { IFilterParams } from '@/types';
import { infiniteQueryOptions } from '@tanstack/react-query';
import { LIMIT_PRODUCT } from '.';

const productQueries = {
    getListProducts: (filterParams: IFilterParams) => ({
        queryKey: ['products', filterParams],
        queryFn: () => productsService.getProducts(filterParams),
    }),
    getProductInfinityQuery: (params: IFilterParams) => {
        return infiniteQueryOptions({
            queryKey: ["global", "productList", "infinity", params],
            queryFn: async ({ pageParam }: { pageParam: { _page: number | null } }) =>
                productsService.getProducts({ ...params, _page: pageParam._page ?? 1 }),
            getNextPageParam: (data, allPages) => {
                if (!data || data.length < LIMIT_PRODUCT) {
                    return undefined; // No more pages
                }
                return { _page: (allPages.length || 1) + 1 };
            },
            initialPageParam: { _page: 1 },
        });
    },
}

export default productQueries;
