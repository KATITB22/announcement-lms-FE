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
        <div className="bg-Yellow p-4 rounded-md">
            <div
                className={`bg-MediumBrown p-6 inline-block rounded-md ${className}`}
            >
                <p className="font-Heading text-title">Filter</p>
                <CheckboxGroup
                    onChange={(value) => setChecked(value.map((i) => `${i}`))}
                    value={checked}
                >
                    <Stack
                        spacing={[1, 3]}
                        direction={['column']}
                        className="bg-MediumBrown rounded-md"
                    >
                        {listOfCategories.map((category) => (
                            <Checkbox
                                key={category}
                                value={category}
                                border="1px #000000"
                                className="bg-Gray pl-3 pr-8 py-2 rounded-md font-Title"
                                _hover={{
                                    bg: '#FFEBB0',
                                }}
                                _checked={{
                                    bg: '#FFEBB0',
                                }}
                            >
                                {category}
                            </Checkbox>
                        ))}
                    </Stack>
                </CheckboxGroup>
            </div>
        </div>
    );
};

export default FilterAndCategory;
