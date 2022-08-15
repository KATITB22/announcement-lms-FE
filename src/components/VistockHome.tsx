import React from 'react';
import '../index.css';

const VistockHome: React.FC<{}> = () => (
    <div className="absolute h-full w-full -z-10">
        <div
            className="relative home-bg h-full w-full -z-10"
            style={{ top: '-30vw', height: 'calc(100% + 30vw)' }}
        />
    </div>
);

export default VistockHome;
