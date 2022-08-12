import React, { useMemo } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavBarProps } from '@/types/interface';

const Navbar: React.FC<NavBarProps> = ({ children, to }: NavBarProps) => {
    const location = useLocation();
    const isActive = useMemo(
        () => location.pathname === to,
        [location.pathname]
    );
    return (
        <Link
            to={to}
            className={`cursor-pointer no-underline transition-all hover:scale-105 ${
                isActive ? 'text-DarkestOrange' : ''
            }`}
        >
            <Text
                textUnderlineOffset={5}
                textDecoration={isActive ? 'underline' : 'none'}
                transition="all 0.15s ease-in-out"
                _hover={{
                    textDecoration: 'underline',
                }}
            >
                {children}
            </Text>
        </Link>
    );
};

export default Navbar;
