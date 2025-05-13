import { IFilterParams } from "@/types"
import { useInfiniteQuery } from "@tanstack/react-query"
import { useMemo, useState } from "react"
import Filter from "./components/filter"
import ListProducts from "./components/products"
import ProductsSkeleton from "./components/products/skeleton"
import productQueries from "./queries"
import { StyledFooter, StyledLayoutListProduct } from "./styled"
import BannerImage from "./components/bannerImage"
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
    const handleChangeCategory = (category: string) => {
        if (category === "All") {
            setFilterParams({ ...filterParams, category: undefined })
        } else {
            setFilterParams({ ...filterParams, category })
        }
    }
    const UIProductList = useMemo(() => {
        if (isLoading) {
            return <ProductsSkeleton />
        }
       
        return <ListProducts isLoadingLoadMore={isFetching} data={productList || []} onLoadMore={fetchNextPage} isHasNextPage={hasNextPage}
            onChangeCategory={handleChangeCategory}
        />
    }, [isLoading, productList, hasNextPage, isFetching])
    return (
        <>
            <BannerImage />
            <StyledLayoutListProduct>
                <Filter filterParams={filterParams} onSearch={handleSearch} />
                {UIProductList}
            </StyledLayoutListProduct>
            <StyledFooter>
                <img src="./images/body-footer.png" alt="logo" />
            </StyledFooter>
        </>
    )
}

export default Products
