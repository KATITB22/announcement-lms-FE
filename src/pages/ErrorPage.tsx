import React from 'react';
import { Animate } from '@/layout/Animate';
import { SpinnerProps } from '@/types/interface';

const ErrorPage: React.FC<SpinnerProps> = ({ message }) => (
    <Animate>
        <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
            <p className="m-0 mb-2 font-Heading text-h3">
                {message || 'Internal server error'}{' '}
            </p>
            <p className="bg-Yellow rounded p-2 hover:shadow-sm">
                Please refresh the page
            </p>
        </div>
    </Animate>
);

export default ErrorPage;
