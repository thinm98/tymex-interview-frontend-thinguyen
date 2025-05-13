import { css } from "styled-components";

export const media = {
    sm: (args: TemplateStringsArray) => css`
        @media  (max-width: 767px) {
            ${css(args)};
        }
    `,

    md: (args: TemplateStringsArray) => css`
        @media (min-width: 768px) and (max-width: 991px) {
            ${css(args)};
        }
    `,

    lg: (args: TemplateStringsArray) => css`
        @media (min-width: 992px) {
            ${css(args)};
        }
    `,
};