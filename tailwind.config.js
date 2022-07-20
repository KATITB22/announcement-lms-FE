/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
            },
            colors: {
                Yellow: '#FFEBB0',
                Orange: '#FFA06E',
                LightOrange: '#F9D7AA',
                MediumOrange: '#FFB965',
                DarkOrange: '#FF8952',
                Brown: '#66402C',
                LightBrown: '#FFECD0',
                MediumBrown: '#F9DCB0',
            },
            fontFamily: {
                Heading: 'Magilio',
                Subheading: 'Alegreya Semibold',
                Body: 'Alegreya Sans Regular',
                Caption: 'Alegreya Sans Thin',
            },
            fontSize: {
                h1: 96,
                h2: 60,
                h3: 48,
                h4: 34,
                h5: 24,
                h6: 20,
                title: 16,
                body: 14,
                caption: 12,
                overline: 10,
            },
        },
    },
    plugins: [],
};
