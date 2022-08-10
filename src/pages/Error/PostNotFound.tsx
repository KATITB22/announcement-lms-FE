import { Animate } from '@/layout/Animate';
import React from 'react';
import { Link } from 'react-router-dom';
import vistock from '@/assets/images/post-not-found-vistock.png';

const PostNotFound: React.FC<{}> = () => (
    <Animate>
        <div className="relative h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
            <img
                src={vistock}
                alt="gambar vistock"
                className="w-96 absolute left-[50%] bottom-[40%] translate-x-[-50%] -z-10"
            />
            <p className="m-0 mb-2 font-Heading text-h3 text-DarkerOrange drop-shadow-errorStyle">
                Post tidak ditemukan
            </p>
            <Link to="/" className="text-xl ">
                <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
                    Kembali ke halaman utama{' '}
                </div>
            </Link>
        </div>
    </Animate>
);

export default PostNotFound;
