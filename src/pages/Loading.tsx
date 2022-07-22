import React from 'react';
import Spinner from '../components/Spinner';
import Animate from '../layout/Animate';

const Loading: React.FC<{}> = () => (
    <Animate>
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
            <Spinner message="Loading..." />
        </div>
    </Animate>
);
export default Loading;
