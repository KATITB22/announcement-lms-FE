import React, { useMemo } from 'react';
import { Link as rrLink, useLocation } from 'react-router-dom';
import { Link } from '@chakra-ui/react';
import { NavBarProps } from '../types/interface';

const Navbar: React.FC<NavBarProps> = ({ children, to }: NavBarProps) => {
    const location = useLocation();
    const isActive = useMemo(
        () => location.pathname === to,
        [location.pathname]
    );
    return (
        <Link
            as={rrLink}
            to={to}
            color={isActive ? 'base.headerSelectedText' : 'inherit'}
        >
            {children}
        </Link>
    );
};

export default Navbar;
