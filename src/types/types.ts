import { typePartner } from './enum';

export type imgPartner = {
    title: string;
    type: typePartner; // tipe sponsor
    imageUrl: string;
    link: string; // link href
};

export type jsxElmt = JSX.Element | JSX.ElementClass;
