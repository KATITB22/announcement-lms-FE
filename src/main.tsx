import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import App from './App';
import './index.css';
import Fonts from './fonts';

const theme = extendTheme({
    fonts: {
        heading: "'Magilio', sans-serif",
        subheading: "'Alegreya Semibold', sans-serif",
        body: "'Alegreya Sans Regular', sans-serif",
        caption: "'Alegreya Sans Thin', sans-serif",
    },
    colors: {
        base: {
            // TODO: fix colors
            900: '#511D05',
            800: '#FFB965',
            700: '#FFC176',
            600: '#FFEBB0',
            500: '#FFECD0',
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Fonts />
            <App />
        </ChakraProvider>
    </React.StrictMode>
);
