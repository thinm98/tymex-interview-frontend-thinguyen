import styled from "styled-components";

export const StyledLayoutListProduct = styled.div`
  padding: 20px;
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