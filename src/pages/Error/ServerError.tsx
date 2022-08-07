import React from 'react';
import { Animate } from '@/layout/Animate';
import Vistock from '@/assets/images/server-error.svg';
import { Link } from 'react-router-dom';

const ServerError: React.FC<{}> = () => (
    <Animate>
        <div className="relative h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
            <img
                src={Vistock}
                alt="Server Error"
                className="w-[30rem] absolute left-[50%] bottom-[25%] translate-x-[-50%] -z-10"
            />
            <p className="m-0 mt-20 mb-2 font-Heading text-h3 text-DarkerOrange drop-shadow-errorStyle">
                Coba refresh halaman ini
            </p>
            <div className="bg-Orange rounded-full p-2 px-4 hover:shadow-sm">
                <Link to="/" className="text-White font-Heading">
                    KEMBALI
                </Link>
            </div>
        </div>
    </Animate>
);

export default ServerError;
