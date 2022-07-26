/* eslint-disable no-unused-vars */

export type Post = {
    title: string;
    date: string;
    author: string;
    description: string;
    imageUrl: string;
    link: string; // link to detail post
    tags?: string[];
};

export type paragraph = string;

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
