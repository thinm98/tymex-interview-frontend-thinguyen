import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  background: #18191c;
  color: #fff;
  padding: 48px 0 0 0;
  border-top: 2px solid #2b2e3a;
  font-family: 'Orbitron', 'Roboto', sans-serif;
`;

export const FooterContent = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 0 32px 32px 32px;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: stretch;
    gap: 24px;
    padding: 0 12px 24px 12px;
  }
`;

export const FooterCol = styled.div`
  flex: 1 1 0;
  min-width: 220px;
  margin-bottom: 16px;
`;

export const FooterTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 900;
  letter-spacing: 1px;
  margin-bottom: 18px;
  text-transform: uppercase;
`;

export const FooterNav = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 12px 32px;
  font-size: 1rem;
  @media (max-width: 600px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const FooterNavItem = styled.li`
  color: #fff;
  opacity: 0.92;
  cursor: pointer;
  transition: color 0.18s;
  &:hover {
    color: #e100ff;
  }
`;

export const FooterContact = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 1rem;
  color: #fff;
`;

export const FooterContactRow = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FooterSubscribe = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    gap: 8px;
  }
`;

export const SubscribeInput = styled.input`
  padding: 10px 16px;
  border-radius: 6px;
  border: 1px solid #888;
  background: #18191c;
  color: #fff;
  font-size: 1rem;
  flex: 1;
  outline: none;
  transition: border 0.18s;
  &:focus {
    border: 1.5px solid #e100ff;
  }
`;

export const SubscribeButton = styled.button`
  background: linear-gradient(90deg, #e100ff 0%, #ff5fcb 100%);
  color: #fff;
  font-weight: 700;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  padding: 10px 28px;
  cursor: pointer;
  transition: background 0.2s, box-shadow 0.2s;
  box-shadow: 0 2px 8px rgba(225, 0, 255, 0.15);
  outline: none;
  &:hover {
    background: linear-gradient(90deg, #ff5fcb 0%, #e100ff 100%);
    box-shadow: 0 4px 16px rgba(225, 0, 255, 0.25);
  }
`;

export const FooterBottom = styled.div`
  border-top: 1px solid #333;
  margin-top: 24px;
  padding: 18px 32px 18px 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.98rem;
  color: #aaa;
  flex-wrap: wrap;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 8px;
    padding: 12px 8px;
    text-align: center;
  }
`;

export const FooterLinks = styled.div`
  display: flex;
  gap: 24px;
  font-size: 1rem;
  @media (max-width: 600px) {
    justify-content: center;
    gap: 12px;
    font-size: 0.95rem;
  }
`;
