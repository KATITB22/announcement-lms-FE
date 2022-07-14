import React from 'react';
import Navbar from '../components/Navbar';
import { BaseProps } from '../types/interface';

const BaseLayout: React.FC<BaseProps> = (props) => {
    const { children } = props;
    return <Navbar>{children}</Navbar>;
};

export default BaseLayout;
