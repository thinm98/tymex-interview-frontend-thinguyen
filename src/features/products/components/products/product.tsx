import { IProduct } from "@/types"
import { Card, AuthorName, AuthorRow, Avatar, Badge, Favorite, Price, ProductImage, Title, TitleRow, AvatarWrapper } from "./styled"

type Props = {
    data: IProduct
}
const Product = ({ data }: Props) => {
    const image = `https://picsum.photos/id/${data.imageId}/200/300`
    return (
        <Card>
            <Badge>{data.tier}</Badge>
            {data.isFavorite && <Favorite />}
            <ProductImage src={image} alt={data.title} />
            <TitleRow>
                <Title>{data.title}</Title>
                <Price>
                    <img src="./images/logos_ethereum.png" alt="ETH" width={8} style={{ marginRight: 2 }} />
                    {data.price} ETH
                </Price>
            </TitleRow>
            <AuthorRow>
                <AvatarWrapper>
                    <Avatar src={data.author.avatar} alt={data.author.firstName} />
                </AvatarWrapper>
                <AuthorName>{data.author.firstName}</AuthorName>
            </AuthorRow>
        </Card>
    )
}

export default Product;