import React from 'react';
import { SpinnerProps } from '@/types/interface';

const LoaderStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
};

const Spinner: React.FC<SpinnerProps> = ({ message }) => (
    <div className="flex flex-col items-center">
        <div style={LoaderStyle} className="animate-bounce bg-Yellow" />
        <p className="py-4 font-bold text-lg text-orange-900">{message}</p>
    </div>
);

export default Spinner;
