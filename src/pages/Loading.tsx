import React from 'react';
import { Color } from '../types/enum';
import Spinner from '../components/Spinner';

const LoadingStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: Color.Orange,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
};

const Loading: React.FC<{}> = () => (
    <div style={LoadingStyle}>
        <Spinner message="Loading..." />
    </div>
);
export default Loading;
