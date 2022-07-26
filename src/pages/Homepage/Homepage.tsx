import React from 'react';
import BlogPost from '../../components/BlogPost';
import BaseLayout from '../../layout/BaseLayout';
import { Post } from '../../types/types';
import useFetch from '../../hooks/useFetch';
import env from '../../env';

const listOfPost = [
    {
        title: 'Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: 'Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description: 'Lorem ',
        tags: ['sponsor', 'materi', 'oskm', 'aaa', 'wagwag'],
    },
    {
        title: 'Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '0. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '1. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '2. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '3. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '4. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: ['sponsor', 'materi', 'oskm'],
    },
    {
        title: '5. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem lorem lorem. Ipsum odlor sit amet. Lorem lorem lorem. Ipsum odlor sit amet. Lorem lorem lorem. Ipsum odlor sit amet. Lorem lorem lorem. Ipsum odlor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    },
    {
        title: '6. Post Title',
        date: '19 Jul 2022',
        author: 'Mamet KAT ITB',
        imageUrl:
            'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        link: '#',
        description:
            'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
        tags: [
            'sponsor',
            'materi',
            'oskm',
            'aaa',
            'wagwag',
            'sponsor',
            'materi',
            'oskm',
            'aaa',
            'wagwag',
        ],
    },
];

const Homepage: React.FC<{}> = () => {
    const path = env.REACT_APP_GHOST_API_URL+ "/ghost/api/content/posts?key=" + env.REACT_APP_GHOST_API_CONTENT_API_KEY + "&include=tags";
    // const path = "http://localhost:2368/ghost/api/content/posts?key=c11259cec5c2cfa1a037f3f5a4&include=tags";
    const { data, isLoading, error, message } = useFetch<Post>(path);

    if (isLoading) {
        return (
            <></>
        )
    }

    if (error){
        console.log(message);
        return (
            <></>
        )
    }

    const blogPostElements = data.posts.map((item: Post) => (
        <BlogPost
            id={item.id}
            title={item.title}
            date={item.created_at}
            // author={item.author}
            description={item.excerpt}
            imageUrl={item.feature_image}
            // link={item.link}
            // tags={item.tags}
        />
    ));
    return (
        <BaseLayout>
            <div>
                <div className="py-20 bg-Yellow">
                    <div className="container mx-auto px-6">
                        <h1 className="text-4xl font-bold mb-2 text-center">
                            Announcement
                        </h1>
                    </div>
                </div>
                <div className="bg-gradient-to-b from-[#FF8952] to-[#F9DCB0] py-20">
                    <div className="container max-w-screen-lg min-h-screen mx-auto px-[3.75rem]">
                        <div className="grid justify-center xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
                            {blogPostElements}
                        </div>
                    </div>
                </div>
            </div>
        </BaseLayout>
    );
};

export default Homepage;
