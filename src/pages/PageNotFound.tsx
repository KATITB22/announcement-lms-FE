import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound: React.FC<{}> = () => (
    <div className="min-h-screen flex items-center justify-center flex-col text-center bg-Orange">
        <p className="m-0 mb-2 font-Heading text-h3">
            Your requested page is not found
        </p>
        <Link to="/" className="text-xl ">
            Click here to go back to main page{' '}
        </Link>
    </div>
);
export default PageNotFound;
