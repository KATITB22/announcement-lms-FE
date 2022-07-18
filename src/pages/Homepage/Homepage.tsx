import React from 'react';
import { HomepageProps } from '../../types/interface';
import { useToggle } from '../../hooks/useToggle';
import BaseLayout from '../../layout/BaseLayout';

const Homepage: React.FC<HomepageProps> = (props) => {
    const { text } = props;
    const [isOn, toggle] = useToggle();

    return (
        <BaseLayout>
            <div
                style={
                    isOn
                        ? { backgroundColor: 'green' }
                        : { backgroundColor: 'red' }
                }
            >
                <p>Halo semuanya ini homepage</p>
                <p>{text}</p>
                <button onClick={toggle} type="button">
                    Click me
                </button>
            </div>
        </BaseLayout>
    );
};

export default Homepage;
