import React, { useEffect } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import { FilterCategoryProps } from '../types/interface';

const listOfCategories: string[] = [
    'Test',
    'Gg Gaming',
    'uhuy',
    'wagaw',
    'wafkjhwaikghw',
    'wagjkhawujghaw',
    'awkihgfwiakuhfg',
];

const FilterAndCategory: React.FC<FilterCategoryProps> = ({
    className,
    item,
    setItem,
    originalItem,
}) => {
    const [checked, setChecked] = React.useState<string[]>([]);

    useEffect(() => {
        if (checked.length)
            setItem(
                item.filter((i) =>
                    checked.some((j) => i.tags?.some((tag) => tag.name === j))
                )
            );
        if (!checked.length && originalItem.length) setItem(originalItem);
    }, [checked]);

    return (
        <div className={`bg-Yellow p-8 inline-block rounded-md ${className}`}>
            <p className="font-Subheading text-h4">Filter tags</p>
            <CheckboxGroup
                onChange={(value) => setChecked(value.map((i) => `${i}`))}
            >
                <Stack
                    spacing={[1, 5]}
                    direction={['column']}
                    className="font-Body bg-MediumBrown p-8 rounded-md"
                >
                    {listOfCategories.map((category) => (
                        <Checkbox
                            value={category}
                            colorScheme="red"
                            border="1px red"
                            className="font-Body"
                        >
                            {category}
                        </Checkbox>
                    ))}
                </Stack>
            </CheckboxGroup>
        </div>
    );
};

export default FilterAndCategory;
