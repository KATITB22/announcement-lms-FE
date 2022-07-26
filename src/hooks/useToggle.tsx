import React from 'react';

export const useToggle = (initialValue = false) => {
    const [value, setValue] = React.useState(initialValue);

    const toggle = React.useCallback(() => {
        setValue((val) => !val);
    }, []);

    return [value, toggle] as const;
};
