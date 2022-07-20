import React from 'react';
import useFecth from '../hooks/useFetch';

type Pokemon = {
    name?: string;
    url?: string;
};
const Test: React.FC<{}> = () => {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    const { data, isLoading, error, message } = useFecth<Pokemon>(url);

    if (isLoading) {
        return <p>loading</p>;
    }

    if (error) {
        return <p>{message}</p>;
    }

    return (
        <>
            {data.map((poke) => (
                <div key={poke.name}>
                    <p>{poke.name}</p>
                    <p>{poke.url}</p>
                </div>
            ))}
            <p>test</p>
        </>
    );
};

export default Test;
