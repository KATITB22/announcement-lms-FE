import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { NavBarProps } from '../types/interface';

const Navbar: React.FC<NavBarProps> = ({ children, to }: NavBarProps) => {
    const location = useLocation();
    const isActive = useMemo(
        () => location.pathname === to,
        [location.pathname]
    );
    return (
        <a
            href={to}
            className={`cursor-pointer no-underline ${
                isActive ? 'text-DarkestOrange' : ''
            }`}
        >
            {children}
        </a>
    );
};

export default Navbar;
