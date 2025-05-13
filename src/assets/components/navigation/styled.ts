// styled.ts
import styled from 'styled-components';
import { media } from '@/utils/media';
export const StyledLayoutNavigation = styled.div`
  background-color: #17161AB2;
  padding: 30px 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  ${media.sm`
    padding: 10px 20px;
  `}
  ${media.md`
    padding: 10px 20px;
  `}
`;
export const StyledNavigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  min-width: 1200px;
  ${media.sm`
    max-width: 100%;
    min-width: 100%;
  `}
  ${media.md`
    max-width: 100%;
    min-width: 100%;
  `}
`;
export const StyledListNavigation = styled.div<{ $isMenuOpen: boolean }>`
  .navigation-full {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 60px;
      ${media.md`
        display: none;
      `}
      ${media.sm`
        display: none;
      `}
      ${media.lg`
        display: flex;
      `}
    }
  .navigation-small {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    ${media.md`
      display: flex;
    `}
    ${media.sm`
      display: flex;
    `}
    ${media.lg`
      display: none;
    `}
    .navigation-small-menu {
      display: flex;
      flex-direction: column;
      gap: 20px;
      position: absolute;
      right: 0;
      top: 100%;
      width: 100%;
      background-color: #000000e6;
      padding: 20px;
      animation: ${({ $isMenuOpen }) => $isMenuOpen ? 'slideIn' : 'slideOut'} 0.3s ease-out;
      display: ${({ $isMenuOpen }) => $isMenuOpen ? 'flex' : 'none'};
      @keyframes slideIn {
        from {
          transform: translateY(-100%);
          opacity: 0;
        }
        to {
          transform: translateY(0);
          opacity: 1;
        }
      }
      @keyframes slideOut {
        from {
          transform: translateY(0);
          opacity: 1;
        }
        to {
          transform: translateY(100%);
          opacity: 0;
        }
      }
    }
  }
`;
export const StyledNavigationItem = styled.div<{ $isActive: boolean }>`
  color: #fff;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  width: fit-content;
  ${({ $isActive }) => $isActive && `
    background: linear-gradient(to right, #DA458F, #DA34DD);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    &::after {
      content: '';
      position: absolute;
      bottom: -20%;
      left: 10%;
      width: 20%;
      height: 2px;
      background: #DA458F;
    }

  `}

`;