import { media } from "@/utils/media";
import { styled } from "styled-components";

export const PromoHeroContainer = styled.div`
    width: 100%;
    background: url('/images/banner-image.jpg') no-repeat center center;
    background-size: cover;
    padding-top: 100px;
    position: relative;
    display: flex;
    flex-direction: column;
    ${media.md`
        padding-top: 60px;
        min-height: 320px;
    `}
    ${media.sm`
        padding-top: 60px;
        min-height: 220px;
    `}
    .promo-hero-main-person {
        position: absolute;
        bottom: 0;
        right: 0;
        height: 80%;
        object-fit: cover;
        ${media.md`
            height: 80%;
        `}
        ${media.sm`
            height: 80%;
        `}
        .promo-hero-main-person-img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transform: scaleX(-1);
        }
    }
`;

export const PromoHeroAnnouncement = styled.div`
    padding: 64px 185px;
    ${media.md`
        padding: 32px 40px;
    `}
    ${media.sm`
        padding: 16px 10px;
    `}
    > img {
        width: 50%;
        object-fit: cover;
    }
`;

export const PromoHeroListPerson = styled.div`
    background: url('/images/bg-list-person.png') no-repeat center center;
    background-size: 100% 100%;
    width: 100%;
    padding: 0px 60px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    ${media.md`
        height: 200px;
    `}
    ${media.sm`
        height: 100px;
    `}
    ${media.lg`
        height: 250px;
    `}
`;

export const StyledPersonList = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 3%;
    width: 70%;
    overflow-x: auto;
  scrollbar-width: none;

    ${media.md`
        padding: 0 40px;
        gap: 2%;
        max-width: 70%;
    `}
    ${media.sm`
        padding: 0 4px;
        gap: 1%;
    `}
    img {
        object-fit: cover;
        ${media.md`
            width: 150px;
        `}
        ${media.sm`
            width: 100px;
        `}
         ${media.lg`
            height: 200px;
        `}
    }
`;
