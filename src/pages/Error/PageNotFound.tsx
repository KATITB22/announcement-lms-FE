import React from 'react';
import { Link } from 'react-router-dom';
import { Animate } from '@/layout/Animate';
import vistock from '@/assets/images/page-not-found.svg';

const PageNotFound: React.FC<{}> = () => (
    <Animate>
        <div className="relative min-h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
            <img
                src={vistock}
                alt="gambar vistock"
                className="w-48 md:w-96 absolute left-[50%] bottom-[40%] translate-x-[-50%] -z-10"
            />
            <p className="m-0 mb-1 font-Heading text-title md:text-h3 text-DarkerOrange drop-shadow-errorStyle">
                Halaman tidak ditemukan
            </p>
            <Link to="/" className="text-caption md:text-body">
                <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
                    Kembali ke halaman utama{' '}
                </div>
            </Link>
        </div>
    </Animate>
);
export default PageNotFound;
