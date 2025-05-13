import { HeartFilled } from "@ant-design/icons";
import { styled } from "styled-components";

export const Card = styled.div`
  background: #181c2a;
  border-radius: 16px;
  padding: 16px;
  color: #fff;
  box-shadow: 0 4px 32px rgba(0,0,0,0.4);
  position: relative;
  max-width: 267px;
  cursor: pointer;  
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #1f2436;
    box-shadow: 0 8px 40px rgba(0,0,0,0.6);
    transform: translateY(-4px);
  }
`;

export const Badge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  background: #313B4580;
  color: #fff;
  font-size: 12px;
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 500;
  z-index: 2;
`;

export const Favorite = styled(HeartFilled)`
  position: absolute;
  top: 12px;
  right: 12px;
  color: #fff;
  font-size: 20px;
  z-index: 2;
`;


export const ProductImage = styled.img`
  object-fit: cover;
  border-radius: 12px;
  width: 100%;
  aspect-ratio: 1/1;

`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:4px;
  margin-top: 24px;
  margin-bottom: 16px;
`;

export const Title = styled.div`
  font-size: 16px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex: 1;
`;

export const Price = styled.div`
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const AuthorRow = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  gap: 8px;
`;

export const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #fff;
  position: relative;
  &::after{
    content: "";
    position: absolute;
    bottom: 5%;
    right: 5%;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background:rgb(125, 255, 92);
    border: 0cap.2 solid #fff;
  }
`;

export const Avatar = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

export const AuthorName = styled.div`
  font-size: 12px;
`;

export const StyledProductsSkeleton = styled.div`
    width: 100%;
.ant-skeleton{
    width: 100%;
    .ant-skeleton-image{
       width: 100%;
    }
}
`;
export const StyledLayoutListProduct = styled.div`
flex:1;
display:flex;
flex-direction: column;
gap:16px;
align-items: center;
`;