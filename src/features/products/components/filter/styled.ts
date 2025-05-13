import { Select } from "antd";
import styled from "styled-components";
import { media } from "@/utils/media";
export const { Option } = Select;

export const FilterWrapper = styled.div`
  padding: 24px;
  width: 372px;
  color: #fff;
  .ant-input,
  .ant-select-selector {
    background: #23263a !important;
    color: #fff !important;
    border: none !important;
  }
  .ant-slider-track {
    background: linear-gradient(90deg, #ff5c97 0%, #ffc371 100%);
  }
  .ant-slider-handle {
    border-color: #ff5c97;
  }
  .ant-btn-primary {
    background: linear-gradient(90deg, #ff5c97 0%, #ffc371 100%);
    border: none;
    font-weight: bold;
  }
  .ant-btn-link {
    color: #6c7ae0;
  }
`;

export const Label = styled.div`
  margin: 18px 0 8px 0;
  font-weight: 500;
  color: #fff;
`;
export const StyledLayoutFilter = styled.div`

  .layout-filter__btn {
    ${media.lg`
      display: none;
    `}
    ${media.md`
      display: block;
    `}
    ${media.sm`
      display: block;
    `}
  }
  .layout-filter__full{
    ${media.lg`
      display: block;
    `}
    ${media.md`
      display: none;
    `}
    ${media.sm`
      display: none;
    `}
  } 
`;
