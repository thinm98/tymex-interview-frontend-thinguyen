import { IProduct } from "@/types";
import Product from "./product";
import { Empty, Row } from "antd";
import { Col } from "antd";
import { StyledLayoutListProduct, StyledProductsWrapper } from "./styled";
import CategoryFilter from "./listCategory";
import ButtonComponent from "@/assets/components/buttonComponent";
import { StyledProductsEmpty } from "../../styled";
type Props = {
    data: IProduct[];
    onLoadMore: () => void;
    isHasNextPage: boolean;
    isLoadingLoadMore: boolean;
    onChangeCategory: (category: string) => void;
}
const ListProducts = ({ data, onLoadMore, isHasNextPage, isLoadingLoadMore, onChangeCategory }: Props) => {

    return (
        <StyledLayoutListProduct>
            <CategoryFilter onChangeCategory={onChangeCategory} />
            {data.length === 0 ? (
                <StyledProductsEmpty>
                    <Empty description="No products" />
                </StyledProductsEmpty>
            ) : <>
                <StyledProductsWrapper>

                    <Row gutter={[16, 16]}>
                        {data.map((product) => (
                            <Col key={product.id} xs={24} sm={12} md={8} lg={8} xl={6}>
                                <Product data={product} />
                            </Col>
                        ))}
                    </Row>
                </StyledProductsWrapper>
                <div style={{ display: "flex", justifyContent: "center", marginTop: 20, width: '100%' }}>
                    <ButtonComponent loading={isLoadingLoadMore} disabled={!isHasNextPage} onClick={onLoadMore}

                        style={{
                            width: 300,
                        }}
                    >
                        view more
                    </ButtonComponent>
                </div>
            </>}
        </StyledLayoutListProduct>
    )
}

export default ListProducts;