import React from 'react';
import { Button, ButtonProps, ConfigProvider, Space } from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      > span {
        position: relative;
      }

      &::before {
        content: '';
        background: linear-gradient(135deg, #DA458F, #DA34DD);
        position: absolute;
        inset: -1px;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
  unActiveButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(.${prefixCls}-btn-dangerous) {
      background: linear-gradient(135deg, #5c2352, #5d1e66);
    }
  `,
}));
type ButtonComponentProps = {
  children?: React.ReactNode;
  onClick?: () => void;
  unActive?: boolean;
} & ButtonProps;
const ButtonComponent: React.FC<ButtonComponentProps> = ({ children, onClick, unActive, ...props }) => {
  const { styles } = useStyle();

  return (
    <ConfigProvider
      button={{
        className: unActive ? styles.unActiveButton : styles.linearGradientButton,
      }}
    >
      <Space>
        <Button type="primary" size="large" onClick={onClick} {...props}>
          {children}
        </Button>
      </Space>
    </ConfigProvider>
  );
};

export default ButtonComponent;