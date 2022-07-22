import React from 'react';
import { listOfPosts } from '../Homepage/Homepage';
import FilterAndCategory from '../../components/FilterAndCategory';
import BlogPost from '../../components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';

const Searchpage: React.FC<{}> = () => (
    <BaseLayout>
        <div className="min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
            <FilterAndCategory className="hidden" />
            <section className="grid mx-auto max-w-[85%] md:grid-cols-2 place-items-center gap-4 lg:grid-cols-3 py-4">
                {listOfPosts.map((post) => (
                    <BlogPost {...post} />
                ))}
            </section>
        </div>
    </BaseLayout>
);

export default Searchpage;
