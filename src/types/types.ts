import { PostOrPage, PostsOrPages } from '@tryghost/content-api';
import { typePartner } from './enum';

export interface Posts extends PostsOrPages {}

export interface DetailPost extends PostOrPage {}

export interface NodeExtended extends ChildNode {
    attrs: Record<string, string>;
    rawAttrs: string;
    tagName: string;
    text: string;
    childNodes: NodeListOf<NodeExtended>;
    outerHTML: string;
}

export type imgPartner = {
    title: string;
    type: typePartner; // tipe sponsor
    imageUrl: string;
    link: string; // link href
};
