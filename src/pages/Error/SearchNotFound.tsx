import React from 'react';
import vistock from '@/assets/images/search-not-found.svg';

const SearchNotFound: React.FC<{}> = () => (
    <div className="relative min-h-content flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange z-10">
        <img
            src={vistock}
            alt="tidak ada hasil pencarian"
            className="w-[30rem] absolute left-[50%] bottom-[33%] translate-x-[-50%] -z-10"
        />
        <p className="m-0 mb-2 font-Heading text-h3 text-DarkerOrange drop-shadow-errorStyle">
            Hasil tidak ditemukan
        </p>
        <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
            Gunakan kata kunci yang lain atau yang lebih umum
        </div>
    </div>
);
export default SearchNotFound;
