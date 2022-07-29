import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { typePartner } from './enum';

export interface Posts extends PostsOrPages {}

export interface DetailPost extends PostOrPage {}

export type imgPartner = {
    title: string;
    type: typePartner; // tipe sponsor
    imageUrl: string;
    link: string; // link href
};
