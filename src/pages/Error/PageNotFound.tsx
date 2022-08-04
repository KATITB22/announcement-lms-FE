import React from 'react';
import { Link } from 'react-router-dom';
import { Animate } from '@/layout/Animate';

const PageNotFound: React.FC<{}> = () => (
    <Animate>
        <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
            {/* TODO masukan image  */}
            <p className="m-0 mb-2 font-Heading text-h3">
                Halaman tidak ditemukan
            </p>
            <Link to="/" className="text-xl ">
                <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
                    Kembali ke halaman utama{' '}
                </div>
            </Link>
        </div>
    </Animate>
);
export default PageNotFound;
