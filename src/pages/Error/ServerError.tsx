import React from 'react';
import { Animate } from '@/layout/Animate';
import { SpinnerProps } from '@/types/interface';

const ServerError: React.FC<SpinnerProps> = ({ message }) => (
    <Animate>
        <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
            {/* TODO insert image server error  */}
            <p className="m-0 mb-2 font-Heading text-h3">
                {message || 'Internal server error'}{' '}
            </p>
            <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
                Please refresh the page
            </div>
        </div>
    </Animate>
);

export default ServerError;
