import React from 'react';
import Spinner from '../components/Spinner';

const Loading: React.FC<{}> = () => (
    <div className="flex justify-center items-center min-h-screen bg-Orange">
        <Spinner message="Loading..." />
    </div>
);
export default Loading;
