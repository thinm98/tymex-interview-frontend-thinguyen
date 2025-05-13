import styled from "styled-components";
import { media } from "@/utils/media";

export const StyledLayoutListProduct = styled.div`
  padding: 20px;
  display: flex;
  gap: 20px;
  ${media.md`
    flex-direction: column;
    align-items: flex-end;
  `}
  ${media.sm`
    flex-direction: column;
    align-items: flex-end;
  `}
`;

export const StyledProductsEmpty = styled.div`
width: 100%;
height: 100%;
display:flex;
justify-content: center;
align-items: center;
.ant-empty-description{
    color:#fff;
}

`
export const StyledFooter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`