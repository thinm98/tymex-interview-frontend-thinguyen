import { Select, SelectProps } from "antd";
import { styled } from "styled-components";

export const SelectWrapper = styled.div`
  .ant-select-selector {
    background: #23263a !important;
    color: #fff !important;
    border: 1px solid #888 !important;
  }
  .ant-select-arrow {
    color: #fff !important;
  }

`;
type Props = SelectProps;
const SelectComponent = ({ ...props }: Props) => {
    return (
        <SelectWrapper>
            <Select {...props} />
        </SelectWrapper>
    )
}

export default SelectComponent;