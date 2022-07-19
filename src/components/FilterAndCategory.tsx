import React from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';

const listOfCategories: string[] = [
    'Test',
    'gaming',
    'uhuy',
    'wagaw',
    'wafkjhwaikghw',
    'wagjkhawujghaw',
    'awkihgfwiakuhfg',
];

const FilterAndCategory: React.FC<{}> = () => (
    <div className="bg-Yellow p-8 inline-block rounded-md">
        <p className="text-h4">Filter</p>
        <CheckboxGroup>
            <Stack
                spacing={[1, 5]}
                direction={['column']}
                className="bg-LightBrown p-8 rounded-md"
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

export default FilterAndCategory;
