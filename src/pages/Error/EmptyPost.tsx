import React from 'react';

const EmptyPost: React.FC<{}> = () => (
    <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
        {/* TODO insert image empty post */}
        {/* <img src="" alt="" /> */}
        <p className="m-0 mb-2 font-Heading text-h3">Wah Belum ada post nih</p>
    </div>
);
export default EmptyPost;
