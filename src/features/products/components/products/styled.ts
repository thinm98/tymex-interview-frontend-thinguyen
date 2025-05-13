import { HeartFilled } from "@ant-design/icons";
import { styled } from "styled-components";
import { media } from "@/utils/media";
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
width: 100%;
`;
export const StyledProductsWrapper = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
    max-width: 1600px;
    max-height: 1300px;
    padding: 0 20px;
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: #FFC107 #181c2a;
  &::-webkit-scrollbar {
    width: 12px;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: #181c2a;
    border-left: 1px solid #444;
    border-right: 1px solid #444;
  }
  &::-webkit-scrollbar-thumb {
    background: #FFC107;
    border-radius: 6px;
    min-height: 60px;
    border: 3px solid #181c2a;
  }
`;

export const StyledListCategory = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  gap: 20px;
  padding: 16px 0 16px 16px;
  background: transparent;
  box-sizing: border-box;
  scrollbar-width: none;
  width: 100%;
  ${media.lg`
   width: 500px;
  `}

  
  
`;

export const CategoryButton = styled.button<{ $active: boolean }>`
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(90deg, #ff4ecd 0%, #6f1aff 100%)"
      : "rgba(120, 60, 150, 0.5)"};
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  outline: none;
  &:hover {
    background: linear-gradient(90deg, #ff4ecd 0%, #6f1aff 100%);
  }
`;

export const ArrowButton = styled.button`
  background: transparent;
  border: none;
  color: #ff4ecd;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  cursor: pointer;
  font-size: 1.5rem;
`;
