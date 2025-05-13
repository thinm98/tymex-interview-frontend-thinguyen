import productQueries from "./queries"
import { useQuery } from "@tanstack/react-query"

const Products = () => {
    const { data: dataProducts, isLoading, error } = useQuery(
        productQueries.getListProducts()
    )

    if (isLoading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error loading products</div>
    }
    return (
        <div>
            <h1>Products</h1>
            {dataProducts?.map((product) => (
                <div key={product.id}>
                    <h2>{product.author.firstName}</h2>
                </div>
            ))}
        </div>
    )
}

export default Products
