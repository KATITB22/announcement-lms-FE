import React from 'react';

import Navbar from '../components/Navbar';
import { BaseProps } from '../types/interface';
import Animate from './Animate';

const BaseLayout: React.FC<BaseProps> = (props) => {
    const { children } = props;
    return (
        <Animate>
            <Navbar />
            {children}
        </Animate>
    );
};

export default BaseLayout;
