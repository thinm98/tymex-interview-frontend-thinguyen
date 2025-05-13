import { TProduct } from "@/types"
import { useState } from "react"

const Products = () => {
    const [products, setProducts] = useState<TProduct[]>([])
    return (
        <div>
            <h1>Products</h1>
        </div>
    )
}

export default Products
