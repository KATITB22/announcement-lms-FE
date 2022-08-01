const Fuse = require('fuse.js');

const list = [
    { title: 'fast and furious 8', tag: 'race' },
    { title: '2 fast and 2 furious', tag: 'race' },
    { title: 'up', tag: 'adventure' },
];

const option = {
    keys: ['title', 'tag'],
};

const fuse = new Fuse(list, option);

const result = fuse.search('race');
console.log(result);
