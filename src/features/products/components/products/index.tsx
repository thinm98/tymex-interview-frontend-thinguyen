import { IProduct } from "@/types";
import Product from "./product";
import { Button, Row } from "antd";
import { Col } from "antd";
import { StyledLayoutListProduct } from "./styled";
type Props = {
    data: IProduct[];
    onLoadMore: () => void;
    isHasNextPage: boolean;
    isLoadingLoadMore: boolean;
}
const ListProducts = ({ data, onLoadMore, isHasNextPage, isLoadingLoadMore }: Props) => {

    return (
        <StyledLayoutListProduct>
            <Row gutter={[16, 16]}>
                {data.map((product) => (
                    <Col key={product.id} xs={24} sm={12} md={8} lg={6}>
                        <Product data={product} />
                    </Col>
                ))}
            </Row>
            <div>
                <Button loading={isLoadingLoadMore} disabled={!isHasNextPage} onClick={onLoadMore}>
                    load more
                </Button>
            </div>
        </StyledLayoutListProduct>
    )
}

export default ListProducts;