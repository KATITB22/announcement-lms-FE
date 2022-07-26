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
                <div className="bg-Yellow rounded p-2 hover:shadow-sm">
                    Click here to go back to main page{' '}
                </div>
            </Link>
        </div>
    </Animate>
);
export default PageNotFound;
