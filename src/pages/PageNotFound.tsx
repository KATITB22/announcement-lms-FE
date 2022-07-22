import React from 'react';
import { Link } from 'react-router-dom';
import Animate from '../layout/Animate';

const PageNotFound: React.FC<{}> = () => (
    <Animate>
        <div className="min-h-screen flex items-center justify-center flex-col text-center bg-gradient-to-b from-Orange to-LightOrange">
            <p className="m-0 mb-2 font-Heading text-h3">
                Your requested page is not found
            </p>
            <Link to="/" className="text-xl ">
                Click here to go back to main page{' '}
            </Link>
        </div>
    </Animate>
);
export default PageNotFound;
