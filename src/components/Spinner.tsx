import React from 'react';
import { SpinnerProps } from '../types/interface';
import { Color } from '../types/enum';

const LoaderStyle: React.CSSProperties = {
    width: '100px',
    height: '100px',
    backgroundColor: Color.Yellow,
};

const Spinner: React.FC<SpinnerProps> = ({ message }) => (
    <div className="flex flex-col items-center animate">
        <div style={LoaderStyle} className="animate-bounce" />
        <p className="py-4 font-bold text-lg text-orange-900">{message}</p>
    </div>
);

export default Spinner;
