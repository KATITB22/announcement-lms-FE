import React, { useEffect } from 'react';
import { Checkbox, CheckboxGroup, Stack } from '@chakra-ui/react';
import useFetch from '@/hooks/useFetch';
import { fetchAllTag } from '@/service/ghostAPI';
import ErrorPage from '@/pages/ErrorPage';
import { ErrorTypes } from '@/types/enum';
import { Tag } from '@tryghost/content-api';
import { excludeTag } from '@/types/constant';
import { FilterCategoryProps } from '../types/interface';

const parsingQuery = (query: string | null) => {
    if (!query) return [];
    const queryArray = query.split('#');
    const queryArrayWithoutEmpty = queryArray.filter((item) => item !== '');
    return queryArrayWithoutEmpty;
};

const FilterAndCategory: React.FC<FilterCategoryProps> = ({
    className,
    item,
    setItem,
    originalItem,
    initParams,
    setParams,
}) => {
    const [checked, setChecked] = React.useState<string[]>(
        parsingQuery(initParams.get('tag'))
    );

    const { data, isLoading, error } = useFetch(fetchAllTag());
    const [listOfCategories, setListOfCategories] = React.useState<string[]>(
        []
    );

    if (error) return <ErrorPage type={ErrorTypes.ServerError} />;

    useEffect(() => {
        if (!isLoading) {
            setListOfCategories(
                (data as Array<Tag>)
                    .filter((tag) => !excludeTag.includes(tag.name!))
                    .map((tag) => (tag.name ? tag.name : ''))
            );
        }
    }, [data, isLoading]);

    useEffect(() => {
        if (checked.length) {
            if (initParams.get('q')) {
                setParams(
                    {
                        q: initParams.get('q') || '',
                        tag: checked.join('#'),
                    },
                    {
                        replace: true,
                    }
                );
            } else {
                setParams(
                    {
                        tag: checked.join('#'),
                    },
                    {
                        replace: true,
                    }
                );
            }
            setItem(
                item.filter((i) =>
                    checked.some((j) =>
                        i.tags?.some(
                            (tag) =>
                                tag.name?.toLocaleLowerCase() ===
                                j.toLocaleLowerCase()
                        )
                    )
                )
            );
        } else {
            if (!initParams.get('q')) {
                setParams(
                    {},
                    {
                        replace: true,
                    }
                );
            } else {
                setParams(
                    {
                        q: initParams.get('q') || '',
                    },
                    {
                        replace: true,
                    }
                );
            }
            if (originalItem.length) {
                setItem(originalItem);
            }
        }
    }, [checked]);

    return (
        <div className={`bg-Yellow p-8 inline-block rounded-md ${className}`}>
            <p className="font-Subheading text-h4">Filter tags</p>
            <CheckboxGroup
                onChange={(value) => setChecked(value.map((i) => `${i}`))}
                value={checked}
            >
                <Stack
                    spacing={[1, 5]}
                    direction={['column']}
                    className="font-Body bg-MediumBrown p-8 rounded-md"
                >
                    {listOfCategories.map((category) => (
                        <Checkbox
                            key={category}
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
