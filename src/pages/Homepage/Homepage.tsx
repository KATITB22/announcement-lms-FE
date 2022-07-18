import React from 'react';
import { HomepageProps } from '../../types/interface';
import { useToggle } from '../../hooks/useToggle';

const Homepage: React.FC<HomepageProps> = (props) => {
    const { text } = props;
    const [isOn, toggle] = useToggle();

    return (
        <div
            style={
                isOn ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
            }
        >
            <p>Halo semuanya ini homepage</p>
            <p>{text}</p>
            <button onClick={toggle} type="button">
                Click me
            </button>
        </div>
    );
};

export default Homepage;
