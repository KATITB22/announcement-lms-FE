import React from 'react';
import { listOfPosts } from '../Homepage/Homepage';
import FilterAndCategory from '../../components/FilterAndCategory';
import BlogPost from '../../components/BlogPost';

const Searchpage: React.FC<{}> = () => (
    <div className="min-h-screen bg-gradient-to-b from-Orange to-LightOrange">
        <FilterAndCategory className="hidden" />
        <section className="grid mx-auto max-w-[85%] md:grid-cols-2 place-items-center gap-4 lg:grid-cols-3">
            {listOfPosts.map((post) => (
                <BlogPost {...post} />
            ))}
        </section>
    </div>
);

export default Searchpage;
