import React, { useState } from 'react';
import { StyledNavigation, StyledNavigationItem, StyledListNavigation, StyledLayoutNavigation } from './styled';
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ButtonComponent from '../buttonComponent';
import WorldIcon from '@/assets/icons/worldIcon';
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
const Navigation: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigationItems = [
        { label: 'HOME', to: '/' },
        { label: 'ABOUT US', to: '/about' },
        { label: 'OUR TEAMS', to: '/our-teams' },
        { label: 'MARKETPLACE', to: '/products' },
        { label: 'ROADMAP', to: '/roadmap' },
        { label: 'WHITEPAPER', to: '/whitepaper' },
    ]
    const isActive = (path: string) => location.pathname === path;
    return (
        <StyledLayoutNavigation>
            <StyledNavigation>
            <StyledListNavigation $isMenuOpen={isMenuOpen}>
                <div className='navigation-full'>
                    {navigationItems.map((item) => (
                        <StyledNavigationItem key={item.to} onClick={() => navigate(item.to)} $isActive={isActive(item.to)}>
                            {item.label}
                        </StyledNavigationItem>
                    ))}
                </div>
                <div className="navigation-small">
                    <ButtonComponent icon={<MenuOutlined />} onClick={() => setIsMenuOpen(!isMenuOpen)} />
                     <div className='navigation-small-menu'>
                        {navigationItems.map((item) => (
                            <StyledNavigationItem key={item.to} onClick={() => {
                                navigate(item.to)
                                setIsMenuOpen(false)
                            }} $isActive={isActive(item.to)}>
                                {item.label}
                            </StyledNavigationItem>
                        ))}
                    </div>
                </div>

            </StyledListNavigation>
            <div style={{ display: 'flex', gap: '40px' }}>
                <ButtonComponent>
                    Connect Wallet
                </ButtonComponent>
                <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                    <WorldIcon />
                    <DownOutlined />
                </div>
            </div>
        </StyledNavigation>
        </StyledLayoutNavigation>
    );
};

export default Navigation;
