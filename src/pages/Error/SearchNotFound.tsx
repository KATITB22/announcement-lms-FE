import React from 'react';

const SearchNotFound: React.FC<{}> = () => (
    <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
        {/* TODO masukan image  */}
        <p className="m-0 mb-2 font-Heading text-h3">Hasil tidak ditemukan</p>
        <div className="bg-Yellow rounded-full p-2 px-4 hover:shadow-sm">
            Kembali ke halaman utama{' '}
        </div>
    </div>
);
export default SearchNotFound;
