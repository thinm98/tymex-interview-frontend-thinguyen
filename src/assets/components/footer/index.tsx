import React from 'react';
import {
  FooterWrapper,
  FooterContent,
  FooterCol,
  FooterTitle,
  FooterNav,
  FooterNavItem,
  FooterContact,
  FooterContactRow,
  FooterSubscribe,
  SubscribeInput,
  SubscribeButton,
  FooterBottom,
  FooterLinks,
} from './styled';
import { MailOutlined, PhoneOutlined } from '@ant-design/icons';

const NAV_ITEMS = [
  'Home', 'About us', 'Our teams', 'Whitepaper', 'Marketplace', 'Roadmap', 'FAQs', 'News', 'Community'
];
const BOTTOM_LINKS = ['Security', 'Legal', 'Privacy'];

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterCol>
          <FooterTitle>Navigation</FooterTitle>
          <FooterNav>
            {NAV_ITEMS.map((item) => (
              <FooterNavItem key={item}>{item}</FooterNavItem>
            ))}
          </FooterNav>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Contact Us</FooterTitle>
          <FooterContact>
            <FooterContactRow>
              <PhoneOutlined /> 01234568910
            </FooterContactRow>
            <FooterContactRow>
              <MailOutlined /> tymex-talent@tyme.com
            </FooterContactRow>
          </FooterContact>
        </FooterCol>
        <FooterCol>
          <FooterTitle>Subscribe to receive our latest update</FooterTitle>
          <FooterSubscribe>
            <SubscribeInput placeholder="Your email address" />
            <SubscribeButton>Subcribe</SubscribeButton>
          </FooterSubscribe>
        </FooterCol>
      </FooterContent>
      <FooterBottom>
        <div>©2023 Tyme - Edit. All Rights reserved.</div>
        <FooterLinks>
          {BOTTOM_LINKS.map((link) => (
            <span key={link}>{link}</span>
          ))}
        </FooterLinks>
      </FooterBottom>
    </FooterWrapper>
  );
};

export default Footer;