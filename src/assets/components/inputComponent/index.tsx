import { Input, InputProps } from "antd";
import styled from "styled-components";

export const SubscribeInput = styled(Input)`
    padding: 10px 16px;
    border-radius: 6px;
    border: 1px solid #888;
    background: #18191c;
    color: #fff;
    font-size: 1rem;
    flex: 1;
    outline: none;
    transition: border 0.18s;

    &:focus,
    &:hover {
      border: 1.5px solid #e100ff;
      box-shadow: none;
    }

    ::placeholder {
      color: #fff;
      opacity: 1; /* Firefox */
    }
    input{
        color: #fff !important;
    }
    .ant-input{
        background: #18191c !important;
        color: #fff !important;
    }
    .ant-input-affix-wrapper {
      background: #18191c;
      border: 1px solid #888;
      
      .ant-input-prefix,
      .ant-input-suffix {
        color: #888;
      }

      &:focus,
      &:hover {
      background: #18191c;

        border: 1.5px solid #e100ff;
        box-shadow: none;
      }
    }
`;


type Props = InputProps;
const InputComponent = ({ placeholder, value, onChange, prefix, style, ...props }: Props) => {
    return (
        <SubscribeInput placeholder={placeholder} value={value} onChange={onChange} prefix={prefix} style={{ ...style, background: "#18191c", color: "#fff" }} {...props} />
    )
}

export default InputComponent;