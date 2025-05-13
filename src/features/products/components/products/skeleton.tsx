import { Col, Row, Skeleton } from "antd"
import { StyledProductsSkeleton } from "./styled"

const ProductsSkeleton = () => {
    return (
        <StyledProductsSkeleton>
            <Row gutter={[16, 16]}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <Col key={`product-skeleton-${index}`} xs={24} sm={12} md={8} lg={6}>
                        <Skeleton.Node
                            style={{ borderRadius: 10, backgroundColor: "#3A384199", height: 260 }}
                        />
                    </Col>
                ))}
            </Row>
        </StyledProductsSkeleton>
    )
}
export default ProductsSkeleton