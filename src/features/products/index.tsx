import { IFilterParams } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"
import { Empty } from "antd"
import { useMemo, useState } from "react"
import Filter from "./components/filter"
import ListProducts from "./components/products"
import ProductsSkeleton from "./components/products/skeleton"
import productQueries from "./queries"
import { StyledLayoutListProduct, StyledProductsEmpty } from "./styled"
export const LIMIT_PRODUCT = 20
const Products = () => {
    const [filterParams, setFilterParams] = useState<IFilterParams>({
        _page: 1,
        _limit: LIMIT_PRODUCT,
        q: "",
    })
    const { data: productInfinityData, isLoading, isFetching, error, hasNextPage, fetchNextPage } = useInfiniteQuery(
        productQueries.getProductInfinityQuery(filterParams)
    )
    const productList = useMemo(
        () => productInfinityData?.pages.flatMap((page: any) => page) || [],
        [productInfinityData?.pages]
    );
    if (error) {
        return <div>Error loading products</div>
    }
    const handleSearch = (params: IFilterParams) => {
        setFilterParams(params)
    }
    const UIProductList = useMemo(() => {
        if (isLoading) {
            return <ProductsSkeleton />
        }
        if (productList?.length === 0) {
            return <StyledProductsEmpty>
                <Empty description="No products" />
            </StyledProductsEmpty>
        }
        return <ListProducts isLoadingLoadMore={isFetching} data={productList || []} onLoadMore={fetchNextPage} isHasNextPage={hasNextPage} />
    }, [isLoading, productList, hasNextPage, isFetching])
    return (
        <StyledLayoutListProduct>
            <Filter filterParams={filterParams} onSearch={handleSearch} />
            {UIProductList}
        </StyledLayoutListProduct>
    )
}

export default Products
