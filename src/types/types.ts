/* eslint-disable no-unused-vars */
type Tag = {
    id: string;
    name: string;
    slug: string;
    // description?: string,
    // feature_image?: string,
    visibility: string;
    // og_image?: string,
    // og_title?: string,
    // og_description?: string,
    // twitter_image?: string,
    // twitter_title?: string,
    // twitter_description?: string,
    // meta_title?: string,
    // meta_description?: string,
    // codeinjection_head?: string,
    // codeinjection_foot?: string,
    // canonical_url?: string,
    // accent_color?: string,
    url: string;
};

export type Post = {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    feature_image: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    tags: Tag[];
    primary_tag: Tag;
    url: string;
    excerpt: string;
};

export type paragraph = string;

export type DetailPost = {
    id: string;
    uuid: string;
    title: string;
    slug: string;
    html: string;
    comment_id: string;
    feature_image: string;
    featured: boolean;
    visibility: string;
    created_at: string;
    updated_at: string;
    published_at: string;
    // custom_excerpt?: string,
    // codeinjection_head?: string,
    // codeinjection_foot?: string,
    // custom_template?: string,
    // canonical_url?: string,
    tags: Tag[];
    primary_tag: Tag;
    url: string;
    excerpt: string;
    reading_time: number;
    access: true;
    // og_image?: string
    // og_title?: string
    // og_description?: string
    // twitter_image?: string
    // twitter_title?: string
    // twitter_description?: string
    // meta_title?: string
    // meta_description?: string
    // email_subject?: string
    // frontmatter?: string
    // feature_image_alt?: string
    // feature_image_caption?: string
};

export enum typePartner {
    LG = '200px',
    MD = '150px',
    SM = '100px',
}

export type imgPartner = {
    title: string;
    type: typePartner; // tipe sponsor
    imageUrl: string;
    link: string; // link href
};
