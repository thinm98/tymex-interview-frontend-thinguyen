import { css } from "styled-components";

export const media = {
    xs: (args: TemplateStringsArray) => css`
        @media (max-width: 575px) {
            ${css(args)};
        }
    `,

    sm: (args: TemplateStringsArray) => css`
        @media (min-width: 576px) and (max-width: 767px) {
            ${css(args)};
        }
    `,

    md: (args: TemplateStringsArray) => css`
        @media (min-width: 768px) and (max-width: 991px) {
            ${css(args)};
        }
    `,

    lg: (args: TemplateStringsArray) => css`
        @media (min-width: 992px) and (max-width: 1199px) {
            ${css(args)};
        }
    `,

    xl: (args: TemplateStringsArray) => css`
        @media (min-width: 1200px) and (max-width: 1599px) {
            ${css(args)};
        }
    `,

    xxl: (args: TemplateStringsArray) => css`
        @media (min-width: 1600px) {
            ${css(args)};
        }
    `,
};