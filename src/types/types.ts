import { typePartner } from './enum';

export type imgPartner = {
    title: string;
    type: typePartner; // tipe sponsor
    imageUrl: string;
};

export type jsxElmt = JSX.Element | JSX.ElementClass;

export const possibleRumpunName = [
    'Budaya',
    'Agama',
    'P/M/K',
    'Olahraga',
    'Seni',
    'BSO',
] as const;

export type RumpunName = typeof possibleRumpunName[number];
