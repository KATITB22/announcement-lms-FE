import { RumpunName } from './types';

/* eslint-disable no-unused-vars */
export const MONTHS = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
    'Dec',
];

export const MAX_TITLE = [1, 2]; // max row of title text in search page
export const MAX_DESCRIPTION = [4, 5]; // max row of description text in search page
export const MAX_DESCRIPTION_RELATED = [4, 5];
export const MAX_POST = 6;
export const PAGINATION_PER_PAGE = 5;
export const PAGE_TITLE = '\uE000nno\uE070nce\uE063ent';
export const SPONSOR_TITLE = 'S\uE064o\uE01Esore\uE03A B\uE05A';
export const MEDPAR_TITLE = '\uE023e\uE053ia Partner';
export const CATALOGUE_TITLE = '\uE023\uE03b\uE066c\uE00F';
export const REGEX_PARSE = /(\r\n|\n|\r)/gm;
export const PARTNER_TITLE = '\uE096\uE00Ean\uE01As t\uE032';
export const ABOUT_US_TITLE = '\uE000\uE050o\uE069\uE067 \uE038\uE076';
export const SELAMAT_DATANG = '\uE035elama\uE04C \uE006atan\uE031';
export const DEFILE_UNIT = '\uE006ef\uE058le \uE039nit';
export const mockData = [
    { name: '\uE003SO', link: 'bso' },
    { name: '\uE002gama', link: 'agama' },
    { name: '\uE003u\uE052aya', link: 'budaya' },
    { name: 'Ola\uE057raga', link: 'olahraga' },
    { name: 'Seni', link: 'seni' },
    { name: 'P/M/K', link: 'pmk' },
] as { name: RumpunName; link: string }[];

export const possibleLink = [
    'bso',
    'agama',
    'budaya',
    'olahraga',
    'seni',
    'pmk',
];

export const excludeTag = [
    'BSO',
    'AGAMA',
    'BUDAYA',
    'OLAHRAGA',
    'SENI',
    'PMK',
    'MERCH',
];
